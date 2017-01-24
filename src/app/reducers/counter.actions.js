import { CounterOperations } from './Counter';

function increment(){  
    return {
        type: CounterOperations.INCREMENT
    }
}

function decrement(){  
    return {
        type: CounterOperations.DECREMENT
    };
}

export default { increment, decrement };  