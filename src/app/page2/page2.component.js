import CounterActions from '../reducers/counter.actions';

export class Page2Controller{
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

const Page2 = {
  selector: 'page2',
  bindings: {
  },
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  controller: Page2Controller
};
export default Page2;