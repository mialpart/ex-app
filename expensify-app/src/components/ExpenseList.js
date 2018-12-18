import React from 'react';
import {connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}>
            </ExpenseListItem>
                {/*Voi käyttää myös muotoa expense={expense} / {...expense}*/}
        })}

    </div>
)


const mapStateToProps = (state) => {
    console.log(state)
    return{
        //expenses: state.expense,
        //filters: state.filters
        expenses:selectExpenses(state.expense, state.filters)
    };}
    
    
    // Map actions to props
    //const mapDispatchToProps = (dispatch) => {
        //    return (
            //        dispatch(addExpense({description: 'Melon bill'}))
            //      
            //    )
            //  }
            //{props.expenses[0].description}
            //{props.filters.text}

export default connect((mapStateToProps)
)(ExpenseList);
