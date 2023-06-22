import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import BootstrapDune from './BootstrapDune';
import ProcessManager from './ProcessManager';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(<BootstrapDune />);
createRoot(document.getElementById('processmanager')).render(<ProcessManager />);

