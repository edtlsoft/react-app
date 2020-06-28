import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');

// Bootstrap 4
require('bootstrap');
require('./../node_modules/bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
