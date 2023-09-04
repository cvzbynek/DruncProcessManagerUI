import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import BootstrapDune from './BootstrapDune';
import RenderManager from './RenderManager';
import 'bootstrap/dist/css/bootstrap.css';

let rootContainer = document.getElementById('root');

//createRoot(rootContainer).render(<BootstrapDune />);
createRoot(rootContainer).render(<RenderManager />);
