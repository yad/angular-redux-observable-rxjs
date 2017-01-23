import { combineReducers } from 'redux';  
import { CounterReducer }  from './counter.reducer';

export const RootReducer = combineReducers({  
    counter: CounterReducer
});