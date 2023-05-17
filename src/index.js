import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import Boot from './Boot';
import ProcessManager from './ProcessManager';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(<Boot />);
createRoot(document.getElementById('processmanager')).render(<ProcessManager />);

