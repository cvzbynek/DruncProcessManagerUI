import { Modal, Button } from 'react-bootstrap';

const KillConfirmationModal = ({ show, onHide, processNames, handleKill }) => {
    const isEmpty = processNames.length === 0;
  
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Kill Process</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEmpty
            ? "There are no selected processes to kill."
            : (
              <>
                <p>Are you sure you want to kill the following processes?</p>
                <ul>
                  {processNames.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </>
              )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          {!isEmpty && (
            <Button variant="danger" onClick={handleKill}>
              Confirm Kill
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default KillConfirmationModal;