//import './utils.js'
//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import {setEndDate,setStartDate} from './actions/filters'


//import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


//import { square, add } from './utils.js';
//import isSenior, {isAdult, canDrink} from './person.js'

const store = configureStore();
store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(setTextFilter('Water'));

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(122))



setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

//console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app')); 
