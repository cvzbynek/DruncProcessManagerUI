import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faSyncAlt, faBookOpen, faStopCircle, faEraser, faRedoAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { ProcessManagerClient } from './generated/process_manager_grpc_web_pb.js';
import { Request } from './generated/request_response_pb';
import { ProcessQuery, ProcessUUID, ProcessInstanceList, LogRequest, LogLine, BootRequest, ProcessDescription, ProcessMetadata, ProcessRestriction, ProcessInstance} from './generated/process_manager_pb';
import { Token } from './generated/token_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';
import HelpComponent from './helpComponent';
import LogModal from './LogModal';

function logError(error){
  alert('Error: '+error.message)
  console.error('Error:', error.message);
}

function ProcessManager() {
  const [processInstances, setProcessInstances] = useState([]);
  const [selectedUUIDs, setSelectedUUIDs] = useState([]);
  const [filter, setFilter] = useState({ uuid: '', user: '', session: '', name: '',isAlive: '', exitCode: '' });
  const [showModal, setShowModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [configFile, setConfigFile] = useState(null);
  const [user, setUser] = useState('');
  const [session, setSession] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (processInstances.length === 0) {
      setAllChecked(false);
    } else if (selectedUUIDs.length === processInstances.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [selectedUUIDs, processInstances]);

  const handleSelectAllChange = useCallback((event) => {
    setAllChecked(event.target.checked);
    if (event.target.checked) {
      setSelectedUUIDs(processInstances.map(processInstance => processInstance.getUuid().getUuid()));
    } else {
      setSelectedUUIDs([]);
    }
  }, [processInstances]);

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }
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

  const boot = useCallback(async (bootConfigurationFile, user, session) => {
    // Create a new FileReader object
    const reader = new FileReader();
  
    // Use a Promise to handle the asynchronous read operation
    const fileContents = await new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(bootConfigurationFile);
    });
  
    const bootConfiguration = JSON.parse(fileContents);
  
    for (const app of bootConfiguration.instances) {
      const executableAndArguments = [];
      for (const execargs of bootConfiguration.executables[app.type].executable_and_arguments) {
        for (const [exe, args] of Object.entries(execargs)) {
          const execAndArgs = new ProcessDescription.ExecAndArgs();
          execAndArgs.setExec(exe);
          execAndArgs.setArgsList(args);
          executableAndArguments.push(execAndArgs);
        }
      }
  
      const bootRequest = new BootRequest();
      const processDescription = new ProcessDescription();
      const processMetadata = new ProcessMetadata();
      const processRestriction = new ProcessRestriction();
  
      processMetadata.setUser(user);
      processMetadata.setSession(session);
      processMetadata.setName(app.name);
  
      processDescription.setMetadata(processMetadata);
      processDescription.setExecutableAndArgumentsList(executableAndArguments);
  
      processRestriction.setAllowedHostsList(bootConfiguration.restrictions[app.restriction].hosts);
  
      bootRequest.setProcessDescription(processDescription);
      bootRequest.setProcessRestriction(processRestriction);
  
      const any = new Any();
      any.pack(bootRequest.serializeBinary(), "DUNEProcessManager.BootRequest");
      request.setData(any);
  
      client.boot(request, {}, (error, response) => {
        if (error) {
          logError(error);
          return;
        }
  
        const processInstance = response.getData().unpack(ProcessInstance.deserializeBinary, 'DUNEProcessManager.ProcessInstance');
        console.log('ProcessInstance:', processInstance);
        // Handle the ProcessInstance here
      });
    }
  }, [client, request]);


  const handleKill = useCallback(() => {
    const query = new ProcessQuery();
    const any = new Any();
  
    selectedUUIDs.forEach(uuid => {
      const processUUID = new ProcessUUID();
      processUUID.setUuid(uuid);
      query.addUuids(processUUID);
    });
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

  const handleFlush = useCallback(() => {
    const query = new ProcessQuery();
    const any = new Any();
  
    selectedUUIDs.forEach(uuid => {
      const processUUID = new ProcessUUID();
      processUUID.setUuid(uuid);
      query.addUuids(processUUID);
    });
      any.pack(query.serializeBinary(), "DUNEProcessManager.ProcessQuery");
      request.setData(any);
  
      client.flush(request, {}, (error, response) => {
        if (error) {
          logError(error)
          return;
        }
  
        console.log('Response:', response);
        // Handle the response
      });
  }, [selectedUUIDs, client, request]);

  const handleRestart = useCallback(() => {
    const query = new ProcessQuery();
    const any = new Any();
  
    selectedUUIDs.forEach(uuid => {
      const processUUID = new ProcessUUID();
      processUUID.setUuid(uuid);
      query.addUuids(processUUID);
    });
      any.pack(query.serializeBinary(), "DUNEProcessManager.ProcessQuery");
      request.setData(any);
  
      client.restart(request, {}, (error, response) => {
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
    query.addNames(".*")
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
      setProcessInstances(processInstanceList.getValuesList());
      console.log(processInstances);
    });
    setSelectAll(false);
  }, [client, request]);

  useEffect(() => {
    ps();
  }, [ps]);
  
  const fetchLogs = useCallback(() => {
    // Assuming that LogRequest and LogLine are imported from your protobuf definitions
    const logRequest = new LogRequest();
    const query = new ProcessQuery();
    const processUUID = new ProcessUUID();
  
    // Here, we're assuming that you want to fetch logs for the first selected UUID.
    // You might need to adjust this depending on your requirements.
    processUUID.setUuid(selectedUUIDs[0]);
    query.addUuids(processUUID);
    console.log(processUUID)
    console.log(selectedUUIDs[0])
    // Set how far back you want the logs. Adjust this value as needed.
    logRequest.setHowFar(100);
    logRequest.setQuery(query);
  
    const any = new Any();
    any.pack(logRequest.serializeBinary(), "DUNEProcessManager.LogRequest");
    request.setData(any);
  
    const logLines = [];
    const call = client.logs(request, {});
    call.on('data', (response) => {
      const logLine = response.getData().unpack(LogLine.deserializeBinary, 'DUNEProcessManager.LogLine');
      logLines.push(logLine.getLine());
    });

    call.on('error', (error) => {
      logError(error);
    });

    call.on('end', () => {
      setModalData(logLines);
      setShowLogModal(true);
    });
    console.log(modalData)
  }, [client, request, selectedUUIDs]);

  const handleActionClick = useCallback((action) => {
    // Handle button click
    if (action === 'bootclick') {
      // Show modal with select dropdown
      setShowModal(true);
    }else if (action === 'boot') {
      setShowModal(false);
      console.log(configFile)
      console.log(request)
      boot(configFile, user, session)
      console.log('Boot with configuration file:', configFile.name);
      setTimeout(async () => {
        await ps();
      }, 1000);
      ps();
    } else if (action === 'ps') {
      setSelectedUUIDs([]);
      ps();
    } else if (action === 'kill') {
      handleKill();
      setTimeout(async () => {
        await ps();
      }, 1000);
    } else if (action === 'logs') {
      fetchLogs();
      ps();
    }  else if (action === 'flush') {
      handleFlush();
      setTimeout(async () => {
        await ps();
      }, 1000);
    } else if (action === 'restart') {
      handleRestart();
      setTimeout(async () => {
        await ps();
      }, 1000);
    }
  }, [handleKill, ps, fetchLogs, client, request, configFile, user, session]);

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
      setSelectedUUIDs(prevUUIDs => {
        const newUUIDs = [...prevUUIDs, uuid];
        // Check if all checkboxes are checked
        if (newUUIDs.length === processInstances.length) {
          setSelectAll(true);
        }
        return newUUIDs;
      });
    } else {
      setSelectAll(false);
      setSelectedUUIDs(prevUUIDs => prevUUIDs.filter(item => item !== uuid));
    }
  }, [processInstances]);

  const handleModalClose = useCallback(() => {
    // Reset modal state on close
    setShowModal(false);
    setConfigFile(null);
  }, []);

  const handleFileChange = useCallback((event) => {
    setConfigFile(event.target.files[0]);
  }, []);

  return (
    <Container>
       <Row className="mb-5">
    <Col>
      <h1 className="font-weight-bold"></h1>
    </Col>
  </Row>
  <LogModal
      show={showLogModal}
      onHide={() => setShowLogModal(false)}
      data={modalData}
    />
  <Row className="actions mb-5">
    <Col md="auto" className="pr-5">
      <Button variant="success" onClick={() => handleActionClick('bootclick')}>
        <FontAwesomeIcon icon={faPlayCircle} /> Boot
      </Button>{' '}
      <Button variant="warning" onClick={() => handleActionClick('restart')}>
        <FontAwesomeIcon icon={faSyncAlt} /> Restart
      </Button>{' '}
    </Col>
    <Col md="auto" className="px-5">   
      <Button variant="primary" onClick={() => handleActionClick('logs')}>
        <FontAwesomeIcon icon={faBookOpen} /> Logs
      </Button>{' '}
      <Button variant="danger" onClick={() => handleActionClick('kill')}>
        <FontAwesomeIcon icon={faStopCircle} /> Kill
      </Button>{' '}
    </Col>
    <Col className="pl-5">
      <Button variant="info" onClick={() => handleActionClick('flush')}>
        <FontAwesomeIcon icon={faEraser} /> Flush
      </Button>{' '}
      <Button variant="light" onClick={() => handleActionClick('ps')}>
        <FontAwesomeIcon icon={faListAlt} /> PS
      </Button>{' '}
    </Col>
    <Col className="pl-5">
      <HelpComponent />
    </Col>
  </Row>
      <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Boot Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <Form.Group>
    <Form.Label>Select boot configuration file:</Form.Label>
    <Form.Control type="file" onChange={handleFileChange} />
  </Form.Group>
  <Form.Group>
    <Form.Label>User:</Form.Label>
    <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} />
  </Form.Group>
  <Form.Group>
    <Form.Label>Session:</Form.Label>
    <Form.Control type="text" value={session} onChange={(e) => setSession(e.target.value)} />
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
    <h1></h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>UUID</th>
          <th>Name</th>
          <th>User</th>
          <th>Session</th>
          <th>Alive?{' '}{' '}</th>
          <th>Exit code</th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by UUID"
              onChange={(e) => handleFilterChange(e, 'uuid')}
            />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by Name"
              onChange={(e) => handleFilterChange(e, 'name')}
            />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by User"
              onChange={(e) => handleFilterChange(e, 'user')}
            />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by Session"
              onChange={(e) => handleFilterChange(e, 'session')}
            />
          </th>
          <th>
            <Form.Control as="select" onChange={(e) => handleFilterChange(e, 'isAlive')}>
              <option value="">N/A</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Control>
          </th>
          <th>
            <Form.Control
            type="text"
            placeholder="Filter by Exit Code"
            onChange={(e) => handleFilterChange(e, 'exitCode')}
            />
          </th>
          <th>
            <Form.Check
              type="checkbox"
              id="select-all-checkbox"
              label=""
              checked={allChecked}
              onChange={handleSelectAllChange}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredProcessInstances.map((processInstance, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{processInstance.getUuid().getUuid()}</td>
            <td>{processInstance.getProcessDescription().getMetadata().getName()}</td>
            <td>{processInstance.getProcessDescription().getMetadata().getUser()}</td>
            <td>{processInstance.getProcessDescription().getMetadata().getSession()}</td>
            <td>{processInstance.getStatusCode() === 0 ? "Yes" : "No"}</td>
            <td>{processInstance.getReturnCode() ? processInstance.getReturnCode().toString() : ''}</td>
            <td>
              <Form.Check
                type="checkbox"
                id={`default-checkbox-${index}`}
                label=""
                checked={selectedUUIDs.includes(processInstance.getUuid().getUuid())}
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