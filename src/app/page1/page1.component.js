import CounterActions from '../reducers/counter.actions';

export class Page1Controller{
    /*@ngInject*/
    constructor() {
        this.value = 'xxxx';
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);      
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