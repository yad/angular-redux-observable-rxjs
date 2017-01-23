import { CounterOperations } from './counter';

const initialState = 0;

export function CounterReducer(state = initialState, action) {  
    switch(action.type) {
        case CounterOperations.INCREMENT:
            return state + 1;
        case CounterOperations.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}