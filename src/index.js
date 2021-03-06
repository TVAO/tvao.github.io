import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

import './styles/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

const profileData = require('./data/resume.json');
//import * as profileData from './data/resume.json';

ReactDOM.render(
  <BrowserRouter>
    <App props={profileData}/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
