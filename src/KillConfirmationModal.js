import { Modal, Button } from 'react-bootstrap';

const KillConfirmationModal = ({ show, onHide, onConfirm, processNames }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Process Kill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to kill the following process(es)?
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
        <Button variant="danger" onClick={onConfirm}>
          Kill Process
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KillConfirmationModal;