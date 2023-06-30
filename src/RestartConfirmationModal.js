import { Modal, Button } from 'react-bootstrap';

const RestartConfirmationModal = ({ show, onHide, processNames, handleRestart }) => {
    const isEmpty = processNames.length === 0;
  
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Restart Process</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEmpty
            ? "There are no selected processes to restart."
            : (
              <>
                <p>Are you sure you want to restart the following processes?</p>
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
            <Button variant="warning" onClick={handleRestart}>
              Confirm Restart
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default RestartConfirmationModal;