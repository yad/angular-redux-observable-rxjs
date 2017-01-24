import CounterActions from '../reducers/counter.actions';
import { incrementBySecond } from '../reducers/counter.epics';

export class Page1Controller{
    /*@ngInject*/
    constructor($ngRedux) {
        this.value = 'xxxx';
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);      

        setTimeout(() => $ngRedux.dispatch({type: 'USER_START'}), 2000);
        setTimeout(() => $ngRedux.dispatch({type: 'USER_STOP'}), 10000);
    }
	    
    $onInit() {
    }

    $onDestroy(){
        this.unsubscribe();
    }    

    mapStateToThis(state) {
        return {
            value: state.counter
        };
    }    
}

const Page1 = {
  selector: 'page1',
  bindings: {
  },
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  controller: Page1Controller
};
export default Page1;