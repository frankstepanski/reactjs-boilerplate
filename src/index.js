import React from 'react';
import ReactDOM from 'react-dom';
import './global_style.css';
import CompRouting from './comp_routing';
import * as serviceWorker from './serviceWorker';

//css libraries
import 'bootstrap/dist/css/bootstrap.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(<CompRouting />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
