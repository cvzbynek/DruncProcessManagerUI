import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { debounce } from 'lodash';

const LogModal = ({ show, onHide, data, processName, fetchLogs, uuid }) => {
  const [inputValue, setInputValue] = useState(100);

  const debouncedFetchLogs = debounce((uuid, name, inputValue) => fetchLogs(uuid, name, inputValue), 500);

  const prevShowRef = useRef();
  useEffect(() => {
    prevShowRef.current = show;
  });
  const prevShow = prevShowRef.current;

  useEffect(() => {
    if (!prevShow && show) { // Only call when the modal is opening
      setInputValue(100); // reset the inputValue to 100 each time the modal opens
      fetchLogs(uuid, processName, 100); // direct call to fetchLogs without debounce
    }
  }, [show, uuid, processName, fetchLogs]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    debouncedFetchLogs(uuid, processName, newValue); // use debounced version on input change
  };

  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{processName} Logs</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-white bg-dark">
        <Form.Group className="mb-3">
          <Form.Label>How many lines?</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Label>Log output:</Form.Label>
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
