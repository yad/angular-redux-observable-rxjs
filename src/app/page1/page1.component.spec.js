'use strict';

import ParentModule from '../app.module';
import {Page1Controller} from './page1.component';

describe('src/app/page1/page1.component.spec.js', () => {
    
    describe("Angular test for Page1 component", () => {
        let $componentController;
        beforeEach(angular.mock.module(ParentModule));

        beforeEach(inject((_$componentController_) => {
            $componentController = _$componentController_;
        }));

        it('should know Page1 component', () => {
            expect(() => $componentController('page1')).not.toThrow();
        });
    })

    describe("Unit test for Page1 component", () => {
        it("should have class for Page1 component", () => {
            expect(() => { Page1Controller() }).toThrow();
            expect(() => new Page1Controller()).not.toThrow();
        });
    });
});