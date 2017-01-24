import { Observable } from 'rxjs/Observable';
import CounterActions from '../reducers/counter.actions';

export const incrementBySecond = (actions, store) => {
    return actions.ofType('USER_START')
        .mergeMap(() => Observable.interval(1000)
                .map(() => CounterActions.increment())
                .takeUntil(actions.ofType('USER_STOP')) 
        );
}