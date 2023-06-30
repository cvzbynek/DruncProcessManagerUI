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
      debouncedFetchLogs(uuid, processName, inputValue);
    }
  }, [show, uuid, processName, inputValue, debouncedFetchLogs]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    debouncedFetchLogs(uuid, processName, newValue); // direct call to debouncedFetchLogs
  };

  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{processName} logs</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-white bg-dark">
        <Form.Control
          type="number"
          min="1"
          value={inputValue}
          onChange={handleInputChange}
        />
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