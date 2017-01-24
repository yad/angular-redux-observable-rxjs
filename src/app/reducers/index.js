import { combineReducers } from 'redux';  
import { combineEpics } from 'redux-observable';

import { CounterReducer }  from './counter.reducer';
import { incrementBySecond }  from './counter.epics';

export const RootReducer = combineReducers({  
    counter: CounterReducer
});

export const RootEpic = combineEpics(incrementBySecond);
