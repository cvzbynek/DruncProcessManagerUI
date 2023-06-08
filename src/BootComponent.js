import React, { useState, useEffect } from 'react';
import { ProcessManagerClient } from './generated/process_manager_grpc_web_pb.js';
import { Request, BootRequest, ProcessDescription, ProcessMetadata, ProcessRestriction, ProcessInstance  } from './generated/request_response_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';

function BootComponent({ configPath }) {
  const [bootConfiguration, setBootConfiguration] = useState(null);
  const [processInstance, setProcessInstance] = useState(null);

  useEffect(() => {
    // Fetch boot configuration from server
    fetch(configPath)
      .then(response => response.json())
      .then(data => setBootConfiguration(data))
      .catch(error => console.error('Error:', error));
  }, [configPath]);

  const boot = async () => {
    if (!bootConfiguration) {
      console.error('Boot configuration is not loaded yet');
      return;
    }

    const client = new ProcessManagerClient('http://localhost:8080', null, null);
    const request = new Request();
    // Set your token here
    // request.setToken(...);

    for (const app of bootConfiguration.instances) {
      const executableAndArguments = bootConfiguration.executables[app.type].executable_and_arguments.map(execargs => {
        for (const [exe, args] of Object.entries(execargs)) {
          return new ProcessDescription.ExecAndArgs({ exec: exe, args: args });
        }
      });

      const oldEnv = bootConfiguration.executables[app.type].environment;
      const newEnv = {};
      for (const [k, v] of Object.entries(oldEnv)) {
        if (v === 'getenv') {
          newEnv[k] = process.env[k] || '';
        } else {
          newEnv[k] = v.replace(/\{([^}]+)\}/g, (_, key) => app[key]);
        }
      }

      const bootRequest = new BootRequest({
        process_description: new ProcessDescription({
          metadata: new ProcessMetadata({ user: 'user', session: 'session', name: app.name }),
          executable_and_arguments: executableAndArguments,
          env: newEnv
        }),
        process_restriction: new ProcessRestriction({ allowed_hosts: bootConfiguration.restrictions[app.restriction].hosts })
      });

      const any = new Any();
      any.pack(bootRequest.serializeBinary(), "DUNEProcessManager.BootRequest");
      request.setData(any);

      const response = await client.boot(request, {});
      const processInstance = response.getData().unpack(ProcessInstance.deserializeBinary, 'DUNEProcessManager.ProcessInstance');
      setProcessInstance(processInstance);
    }
  };

  return processInstance;
}

export default BootComponent;