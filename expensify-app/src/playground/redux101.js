import {createStore} from 'redux';



const incrementCount = ({incrementBy = 1} = {}) => (
     {
        type:'INCREMENT',
        incrementBy
    }
)


const decrementCount = ({decrementBy = 1} = {}) => (
    {
       type:'DERCEMENT',
       decrementBy
   }
)



const setCount = ({count}) => (
    {
       type:'SET',
       count
   }
)



const resetCount = ({incrementBy = 0} = {}) => (
    {
        type:'RESET',
        incrementBy: incrementBy
    }
    )
    
    //Reducers
    
    const countReducer =(state = {count: 0}, action) => {
        switch (action.type) {
            case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' 
            ? action.incrementBy : 1;
            return {
               count: state.count + increment 
    
            }
            case 'DECREMENT':
    
            const decrement = typeof action.decrementBy === 'number' 
            ? action.decrementBy : 1;
    
            return {
               count: state.count - decrement
    
            }
            case 'RESET':
            return {
               count: 0
    
            }
            case 'SET':
            return {
               count: action.count
    
            }
            default: {
            return state;
    
            }
        }
    }

const store = createStore(countReducer());
            
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


//this.setState(() => {
    //
    //})
    
    //unsubscribe();
    
    store.dispatch(incrementCount({ incrementBy:4 }));
    store.dispatch(incrementCount());

    store.dispatch(incrementCount());
    //console.log(store.getState());
    
    store.dispatch(resetCount());
    //console.log(store.getState());
    
    store.dispatch(decrementCount({decrementBy: 3}));


    store.dispatch(setCount({count: 232}));
    
    console.log(store.getState());
