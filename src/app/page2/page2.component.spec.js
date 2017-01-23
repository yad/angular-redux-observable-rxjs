'use strict';

import ParentModule from '../app.module';
import {Page2Controller} from './page2.component';

describe('src/app/page2/page2.component.spec.js', () => {
    
    describe("Angular test for Page2 component", () => {
        let $componentController;
        beforeEach(angular.mock.module(ParentModule));

        beforeEach(inject((_$componentController_) => {
            $componentController = _$componentController_;
        }));

        it('should know Page2 component', () => {
            expect(() => $componentController('page2')).not.toThrow();
        });
    })

    describe("Unit test for Page2 component", () => {
        it("should have class for Page2 component", () => {
            expect(() => { Page2Controller() }).toThrow();
            expect(() => new Page2Controller()).not.toThrow();
        });
    });
});