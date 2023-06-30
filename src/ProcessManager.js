import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faSyncAlt, faFileAlt, faStopCircle, faEraser, faRedoAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { ProcessManagerClient } from './generated/process_manager_grpc_web_pb.js';
import { Request } from './generated/request_response_pb';
import { ProcessQuery, ProcessUUID, ProcessInstanceList, LogRequest, LogLine, BootRequest, ProcessDescription, ProcessMetadata, ProcessRestriction, ProcessInstance} from './generated/process_manager_pb';
import { Token } from './generated/token_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';
import HelpComponent from './HelpComponent';
import LogModal from './LogModal';
import { debounce } from 'lodash';
import BootModal from './BootModal';
import KillConfirmationModal from './KillConfirmationModal';
import RestartConfirmationModal from './RestartConfirmationModal';

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
  const [processName, setProcessName] = useState("");
  const [showKillConfirm, setShowKillConfirm] = useState(false);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const [howFar, setHowFar] = useState(100);
  const [currentUUID, setCurrentUUID] = useState('');

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
    if (event.target.checked) {
      const newUUIDs = processInstances.map(processInstance => processInstance.getUuid().getUuid());
      setSelectedUUIDs(newUUIDs);
      const newNames = processInstances.map(processInstance => processInstance.getProcessDescription().getMetadata().getName());
      setSelectedNames(newNames);
      setSelectAll(true);
    } else {
      setSelectedUUIDs([]);
      setSelectedNames([]);
      setSelectAll(false);
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
        // Handle the ProcessInstance here
      });
    }
  }, [client, request]);

  const handleKill = useCallback(() => {
    setShowKillConfirm(true);
  }, []);
  
  const handleRestart = useCallback(() => {
    setShowRestartConfirm(true);
  }, []);

  const confirmKill = useCallback(() => {
    console.log('killa')
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
  
    setShowKillConfirm(false); // Close the modal after the request is sent
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

  const confirmRestart = useCallback(() => {
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
  
    setShowRestartConfirm(false); // Close the modal after the request is sent
    setTimeout(ps, 1000);
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
    });
    setSelectAll(false);
  }, [client, request]);

  useEffect(() => {
    ps();
  }, [ps]);
  
  const fetchLogs = useCallback((uuid, name, howFar) => {
    setCurrentUUID(uuid);
    const logRequest = new LogRequest();
    const query = new ProcessQuery();
    const processUUID = new ProcessUUID();

    processUUID.setUuid(uuid);
    query.addUuids(processUUID);

    logRequest.setHowFar(howFar);
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
      setProcessName(name);
      setShowLogModal(true);
    });
  }, [client, request]);

  const debouncedFetchLogs = useCallback(debounce(fetchLogs, 500), [fetchLogs]);

  const handleActionClick = useCallback((action) => {
    switch (action) {
      case 'bootclick':
        setShowModal(true);
        break;
      case 'boot':
        setShowModal(false);
        boot(configFile, user, session)
        setTimeout(ps, 1000);
        break;
      case 'ps':
        setSelectedUUIDs([]);
        ps();
        break;
      case 'kill':
        handleKill();
        break;
      case 'logs':
        fetchLogs();
        ps();
        break;
      case 'flush':
        handleFlush();
        setTimeout(ps, 1000);
        break;
      case 'restart':
        handleRestart();
        
        break;
      default:
        break;
    }
  },  [handleKill, ps, fetchLogs, client, request, configFile, user, session, handleFlush]);

  const handleFilterChange = useCallback((event, field) => {
    setFilter({ ...filter, [field]: event.target.value });
  }, [filter]);
  const handleLogModalClose = useCallback(() => {
  setShowLogModal(false);
  setCurrentUUID('');
  setHowFar(100);
}, []);
  const debouncedHandleFilterChange = useCallback(
    debounce((event, field) => {
      setFilter({ ...filter, [field]: event.target.value });
    }, 300), // 300ms delay
    [filter]
  );

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

  const handleCheckboxChange = useCallback((event, uuid, name) => {
    setSelectAll(false);
    if (event.target.checked) {
      setSelectedUUIDs((prevUUIDs) => {
        // New variable for clearer code
        const updatedUUIDs = [...prevUUIDs, uuid];
        // Check if all checkboxes are checked
        if (updatedUUIDs.length === processInstances.length) {
          setSelectAll(true);
        }
        return updatedUUIDs;
      });

      setSelectedNames((prevNames) => [...prevNames, name]);
    } else {
      setSelectedUUIDs((prevUUIDs) => prevUUIDs.filter((item) => item !== uuid));
      setSelectedNames((prevNames) => prevNames.filter((item) => item !== name));
    }
  }, [processInstances, setSelectAll, setSelectedUUIDs, setSelectedNames]);

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
  <LogModal 
    show={showLogModal} 
    onHide={handleLogModalClose} 
    data={modalData}
    processName={processName}
    fetchLogs={debouncedFetchLogs}
    uuid={currentUUID}
  />
  <Row className="actions mb-5">
    <h2>Multiple process actions</h2>
    <Col md="auto" className="pr-5">
      <Button variant="success" onClick={() => handleActionClick('bootclick')}>
        <FontAwesomeIcon icon={faPlayCircle} /> Boot
      </Button>{' '}
      <Button variant="warning" onClick={() => handleActionClick('restart')}>
        <FontAwesomeIcon icon={faSyncAlt} /> Restart
      </Button>{' '} 
      <Button variant="danger" onClick={() => handleActionClick('kill')}>
        <FontAwesomeIcon icon={faStopCircle} /> Kill
      </Button>{' '}
      <Button variant="info" onClick={() => handleActionClick('flush')}>
        <FontAwesomeIcon icon={faEraser} /> Flush
      </Button>{' '}
    </Col>
    <Col className="pr-5">
      <Button variant="light" onClick={() => handleActionClick('ps')}>
        <FontAwesomeIcon icon={faListAlt} /> Update
      </Button>{' '}
    </Col>
    <Col className="pr-5">
      <div className="d-flex justify-content-end">
       <HelpComponent />
      </div>
    </Col>
  </Row>
  <KillConfirmationModal
    show={showKillConfirm}
    onHide={() => setShowKillConfirm(false)}
    processNames={selectedNames}
    handleKill={confirmKill} 
  />
  <RestartConfirmationModal
    show={showRestartConfirm}
    onHide={() => setShowRestartConfirm(false)}
    handleRestart={confirmRestart}
    processNames={selectedNames}
  />
  <BootModal 
      showModal={showModal}
      handleModalClose={handleModalClose}
      handleActionClick={handleActionClick}
      handleFileChange={handleFileChange}
      user={user}
      setUser={setUser}
      session={session}
      setSession={setSession}
    />   
    <Row>
  <Col>
    <h1></h1>
    <Table striped hover variant="dark" style={{ borderRadius: '10px', overflow: 'hidden' }}>
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
          <th>Logs</th>
        </tr>
        <tr>
          <th></th>
          <th>
          <Form.Control
            type="text"
            placeholder="Filter by UUID"
            onChange={(e) => debouncedHandleFilterChange(e, 'uuid')}
          />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by Name"
              onChange={(e) => debouncedHandleFilterChange(e, 'name')}
            />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by User"
              onChange={(e) => debouncedHandleFilterChange(e, 'user')}
            />
          </th>
          <th>
            <Form.Control
              type="text"
              placeholder="Filter by Session"
              onChange={(e) => debouncedHandleFilterChange(e, 'session')}
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
            onChange={(e) => debouncedHandleFilterChange(e, 'exitCode')}
            />
          </th>
          <th>
            <Form.Check
              type="checkbox"
              id="select-all-checkbox"
              label=""
              checked={allChecked}
              onChange={handleSelectAllChange}
              style={{ transform: 'scale(1.2)' }}
            />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredProcessInstances.map((processInstance, index) => (
          <tr 
            key={index}
            className={processInstance.getStatusCode() === 0 ? "table-success" : "table-danger"}
          >
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
                onChange={(event) => handleCheckboxChange(event, processInstance.getUuid().getUuid(), processInstance.getProcessDescription().getMetadata().getName())}
                style={{ transform: 'scale(1.2)' }}
              />
            </td>
            <td style={{ textAlign: 'center' }}>
            <Button variant="default" onClick={() => fetchLogs(processInstance.getUuid().getUuid())}>
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </Button>
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