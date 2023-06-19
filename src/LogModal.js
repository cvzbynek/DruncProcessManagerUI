import { Modal, Button } from 'react-bootstrap';

const LogModal = ({ show, onHide, data }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Log Lines</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogModal;