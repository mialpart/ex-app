
import {createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses'
import filtersReducer from './../reducers/filters'


export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            expense:expensesReducer,
            filters:filtersReducer
    })
    );
    return store;
}
