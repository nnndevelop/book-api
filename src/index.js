import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const cont = document.querySelector('#root');
const root = createRoot(cont);
 root.render(
  <Router>
    <App/>
  </Router>
 );