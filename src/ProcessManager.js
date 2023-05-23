import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal, Form, Alert } from 'react-bootstrap';
import { ProcessManagerClient } from './generated/process_manager_grpc_web_pb.js';
import { Request, Response } from './generated/request_response_pb';
import { Token } from './generated/token_pb';

function logError(error){
  alert('Error: '+error.message)
  console.error('Error:', error.message);
}
function ProcessManager() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const client = new ProcessManagerClient('http://localhost:8080', null, null);
  const token = new Token();
  token.setToken('abc123');
  token.setUserName('kralzbyn');

  const request = new Request();
  request.setToken(token);

  const response = new Response();
  response.setToken(token);
  

  /* useEffect(() => {
    // Fetch data from external source
    axios.get('https://myapi.com/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []); */

  const handleActionClick = (action) => {
    // Handle button click
    if (action === 'bootclick') {
      // Show modal with select dropdown
      setShowModal(true);
    }else if (action === 'boot') {
      setShowModal(false);
      console.log(selectedOption)
      console.log(request)
      client.boot(request, {}, (error, response) => {
        if (error) {
          logError(error)
          return;
        }
      
        console.log('Response:', response);
        // Handle the response
      });
      
    } else if (action === 'ps') {
      client.list_process(request, {}, (error, response) => {
        if (error) {
          logError(error)
          return;
        }
      
        console.log('Response:', response);
        // Handle the response
      });
    } 
  };

  const handleModalClose = () => {
    // Reset modal state on close
    setShowModal(false);
    setSelectedOption('');
  };

  const handleSelectChange = (event) => {
    // Update selected option state
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Process List</h1>
          <ListGroup>
            {data.map(item => (
              <ListGroup.Item key={item.id}>
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="actions">
        <Col md="auto">
          <Button variant="secondary" onClick={() => handleActionClick('bootclick')}>Boot</Button>{' '}
        </Col>
        <Col md="auto">   
          <Button variant="secondary" onClick={() => handleActionClick('logs')}>Logs</Button>{' '}
          <Button variant="secondary" onClick={() => handleActionClick('kill')}>Kill</Button>{' '}
        </Col>
        <Col>
          <Button variant="secondary" onClick={() => handleActionClick('restart')}>Restart</Button>{' '}
          <Button variant="secondary" onClick={() => handleActionClick('killall')}>Kill All</Button>{' '}
          <Button variant="secondary" onClick={() => handleActionClick('ps')}>PS</Button>{' '}
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Boot Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select boot json:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">-- Select --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
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
    </Container>
  );
}


export default ProcessManager;