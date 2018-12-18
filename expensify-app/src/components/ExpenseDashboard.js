import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilterItem from './ExpenseListFilterItem';

const ExpenseDashboard = () =>  (

    <div>
    <ExpenseListFilterItem></ExpenseListFilterItem>
    <ExpenseList></ExpenseList>
    </div>
);



export default ExpenseDashboard;