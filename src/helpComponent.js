import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// The Help Button Component
const HelpButton = ({ handleShow }) => {
  return (
    <Button variant="link" onClick={handleShow}>
      <FontAwesomeIcon icon={faQuestionCircle} /> Help
    </Button>
  );
};

// The Help Modal Component
const HelpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
        <h3>Interactions</h3>

        <h4>boot:</h4>
        <p>Begins a process. Choose configuration file from drunc/data and fill in user and session.</p>

        <h4>restart:</h4>
        <p>Restarts a process. Check the checkboxes of the processes you want to restart.</p>

        <h4>ps:</h4>
        <p>Provides a list of processes. Mostly automated. Used to reload the list of processes.</p>

        <h4>kill:</h4>
        <p>Ends a process. Check the checkboxes of the processes you want to kill.</p>

        <h4>flush:</h4>
        <p>Removes dead processes. Check the checkboxes of the processes you want to remove.</p>

        <h4>logs:</h4>
        <p>Returns a log of a process.</p>

        <p>These operations let you control and monitor processes in the system. Please refer to the detailed documentation for more information on how to use these features.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// The Parent Component which contains both the Help Button and Help Modal
const HelpComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HelpButton handleShow={handleShow} />
      <HelpModal show={show} handleClose={handleClose} />
    </>
  );
};

export default HelpComponent;