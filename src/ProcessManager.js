import React, { useState, useCallback, useMemo } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal, Form, Table } from 'react-bootstrap';
import { ProcessManagerClient } from './generated/process_manager_grpc_web_pb.js';
import { Request } from './generated/request_response_pb';
import { ProcessQuery, ProcessUUID, ProcessInstanceList } from './generated/process_manager_pb';
import { Token } from './generated/token_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';

function logError(error){
  alert('Error: '+error.message)
  console.error('Error:', error.message);
}

function ProcessManager() {
  const [processInstances, setProcessInstances] = useState([]);
  const [selectedUUIDs, setSelectedUUIDs] = useState([]);
  const [filter, setFilter] = useState({ uuid: '', user: '', session: '', name: '',isAlive: '', exitCode: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const client = useMemo(() => new ProcessManagerClient('http://localhost:8080', null, null), []);
  const token = useMemo(() => {
    const t = new Token();
    t.setToken('abc123');
    t.setUserName('kralzbyn');
    return t;
  }, []);
  const request = useMemo(() => {
    const r = new Request();
    r.setToken(token);
    return r;
  }, [token]);

  const handleKill = useCallback(() => {
    const query = new ProcessQuery();
    selectedUUIDs.forEach(uuid => {
      const processUUID = new ProcessUUID();
      processUUID.setUuid(uuid);
      query.addUuid(processUUID);
    });

    const any = new Any();
    any.pack(query.serializeBinary(), "DUNEProcessManager.ProcessQuery");
    request.setData(any);

    client.kill(request, {}, (error, response) => {
      if (error) {
        logError(error)
        return;
      }

      console.log('Response:', response);
      // Handle the response
    });
  }, [selectedUUIDs, client, request]);

  const ps = useCallback(() => {
    const query = new ProcessQuery();
    const any = new Any();
    any.pack(query.serializeBinary(), "DUNEProcessManager.ProcessQuery");
    request.setData(any)

    client.ps(request, {}, (error, response) => {
      if (error) {
        logError(error)
        return;
      }
    
      console.log('Response:', response);
      let processInstanceList = new ProcessInstanceList();
      try {
        let unpackedData = response.getData().unpack(ProcessInstanceList.deserializeBinary, 'DUNEProcessManager.ProcessInstanceList');
        processInstanceList = unpackedData instanceof ProcessInstanceList ? unpackedData : null;
      } catch (error) {
        console.error('Error unpacking response:', error);
        return;
      }
      console.log('Unpacked response:', processInstanceList.getValuesList());
      setProcessInstances(processInstanceList.getValuesList());
    });
  }, [client, request]);

  const handleActionClick = useCallback((action) => {
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
      ps();
    } else if (action === 'kill') {
      handleKill();
    } 
  }, [handleKill, ps, client, request, selectedOption]);

  const handleFilterChange = useCallback((event, field) => {
    setFilter({ ...filter, [field]: event.target.value });
  }, [filter]);

  const filteredProcessInstances = useMemo(() => {
    return processInstances.filter(processInstance => {
      const isAlive = processInstance.getStatusCode() === 0 ? "Yes" : "No";
      const exitCode = processInstance.getReturnCode() ? processInstance.getReturnCode().toString() : '';

      return (
        processInstance.getUuid().getUuid().includes(filter.uuid) &&
        processInstance.getProcessDescription().getMetadata().getUser().includes(filter.user) &&
        processInstance.getProcessDescription().getMetadata().getSession().includes(filter.session) &&
        processInstance.getProcessDescription().getMetadata().getName().includes(filter.name) &&
        (filter.isAlive === '' || filter.isAlive === isAlive) &&
        (filter.exitCode === '' || filter.exitCode === exitCode)
      );
    });
  }, [processInstances, filter]);

  const handleCheckboxChange = useCallback((event, uuid) => {
    if (event.target.checked) {
      setSelectedUUIDs([...selectedUUIDs, uuid]);
    } else {
      setSelectedUUIDs(selectedUUIDs.filter(item => item !== uuid));
    }
  }, [selectedUUIDs]);

  const handleModalClose = useCallback(() => {
    // Reset modal state on close
    setShowModal(false);
    setSelectedOption('');
  }, []);

  const handleSelectChange = useCallback((event) => {
    // Update selected option state
    setSelectedOption(event.target.value);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Control buttons</h1>
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
          <Button variant="secondary" onClick={() => handleActionClick('restart')}>Flush</Button>{' '}
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
      <Row>
        <Col>
          <h1>Process List</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  UUID
                  <Form.Control
                    type="text"
                    placeholder="Filter by UUID"
                    onChange={(e) => handleFilterChange(e, 'uuid')}
                  />
                </th>
                <th>
                  User
                  <Form.Control
                    type="text"
                    placeholder="Filter by User"
                    onChange={(e) => handleFilterChange(e, 'user')}
                  />
                </th>
                <th>
                  Session
                  <Form.Control
                    type="text"
                    placeholder="Filter by Session"
                    onChange={(e) => handleFilterChange(e, 'session')}
                  />
                </th>
                <th>
                  Name
                  <Form.Control
                    type="text"
                    placeholder="Filter by Name"
                    onChange={(e) => handleFilterChange(e, 'name')}
                  />
                </th>
                <th>
                  Is alive?
                  <Form.Control as="select" onChange={(e) => handleFilterChange(e, 'isAlive')}>
                    <option value="">N/A</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </th>
                <th>
                  Exit code
                  <Form.Control
                  type="text"
                  placeholder="Filter by Exit Code"
                  onChange={(e) => handleFilterChange(e, 'exitCode')}
                  />
                </th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
            {filteredProcessInstances.map((processInstance, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{processInstance.getUuid().getUuid()}</td>
              <td>{processInstance.getProcessDescription().getMetadata().getUser()}</td>
              <td>{processInstance.getProcessDescription().getMetadata().getSession()}</td>
              <td>{processInstance.getProcessDescription().getMetadata().getName()}</td>
              <td>{processInstance.getStatusCode() === 0 ? "Yes" : "No"}</td>
              <td>{processInstance.getReturnCode() ? processInstance.getReturnCode().toString() : ''}</td>
              <td>
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox-${index}`}
                  label=""
                  onChange={(event) => handleCheckboxChange(event, processInstance.getUuid().getUuid())}
                />
              </td>
            </tr>
          ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default ProcessManager;