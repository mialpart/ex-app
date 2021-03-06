import React from 'react';
import {connect} from 'react-redux';
import {rmExpense} from './../actions/expenses'




const ExpenseListItem =  ({dispatch ,description, id,amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => 
       { dispatch(rmExpense({id}))}
        }>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);