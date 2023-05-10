import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Boot from './Boot';
import ProcessManager from './ProcessManager';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(<Boot />);
ReactDOM.createRoot(document.getElementById('processmanager')).render(<ProcessManager />);

