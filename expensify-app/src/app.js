//import './utils.js'
//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css'
import './styles/styles.scss';


//import { square, add } from './utils.js';
//import isSenior, {isAdult, canDrink} from './person.js'



const template = (
<div>
<h1>Page title</h1>
<p>This is my page</p>
</div>
);

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('app')); 
