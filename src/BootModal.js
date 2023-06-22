import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const BootModal = ({showModal, handleModalClose, handleActionClick, handleFileChange, user, setUser, session, setSession}) => {
  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Boot Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Select boot configuration file:</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>User:</Form.Label>
          <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Session:</Form.Label>
          <Form.Control type="text" value={session} onChange={(e) => setSession(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={() => handleActionClick('boot')}>
          Boot
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BootModal;