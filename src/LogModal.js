import { Modal, Button } from 'react-bootstrap';

const LogModal = ({ show, onHide, data, processName }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{processName} logs</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-white bg-dark">
        <pre className="mb-0">
          {data.map((line, index) => (
            <p key={index} className="mb-0">{line}</p>
          ))}
        </pre>
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