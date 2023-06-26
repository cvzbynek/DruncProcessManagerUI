import { Modal, Button } from 'react-bootstrap';

const RestartConfirmationModal = ({ show, onHide, onConfirm, processNames }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Process Restart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to restart the following process(es)?
        <ul>
          {processNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="warning" onClick={onConfirm}>
          Restart Process
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestartConfirmationModal;