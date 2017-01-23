import { CounterOperations } from './Counter';

function increment(){  
    return {
        type: CounterOperations.INCREMENT,
        payload: {}
    }
}

function decrement(){  
    return {
        type: CounterOperations.DECREMENT,
        payload: {}
    };
}

export default { increment, decrement };  