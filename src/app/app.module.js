const ng1 = require("ng1-webpack-cli");
const reqComponents = require.context('./', true, /\.\/[^\/]*\/[^\/]*.component$/);
const reqHtmls = require.context('./', true, /\.\/[^\/]*\/[^\/]*.html$/);
const reqStyles = require.context('./', true, /\.\/[^\/]*\/[^\/]*.css$/);
const childModules = require.context('./', true, /\.\/[^\/]*\/[^\/]*.module.js$/);

let customDependencies = [];

//--------------- YOU CAN EDIT CUSTOM DEPENDENCIES HERE ---------------
customDependencies.push('ui.router');
customDependencies.push('ngRedux');
import { RootReducer } from './reducers';

//---------------------------------------------------------------------

let moduleName = "reduxPoc";
const appModule = ng1.module(moduleName, reqComponents, reqHtmls, reqStyles, childModules, customDependencies);
export default moduleName;

appModule.config(($stateProvider, $urlRouterProvider, $ngReduxProvider) => {
    $stateProvider.state('home', {
        url: '/',
        template: '<div>home works !</div>'
    });

    $stateProvider.state('page1', {
        url: '/page1',
        component: 'page1'
    });

    $stateProvider.state('page2', {
        url: '/page2',
        component: 'page2'
    });    

    $urlRouterProvider.otherwise("/");

    $ngReduxProvider.createStoreWith(RootReducer);
});