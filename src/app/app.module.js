const ng1 = require("ng1-webpack-cli");
const reqComponents = require.context('./', true, /\.\/[^\/]*\/[^\/]*.component$/);
const reqHtmls = require.context('./', true, /\.\/[^\/]*\/[^\/]*.html$/);
const reqStyles = require.context('./', true, /\.\/[^\/]*\/[^\/]*.css$/);
const childModules = require.context('./', true, /\.\/[^\/]*\/[^\/]*.module.js$/);

let customDependencies = [];

//--------------- YOU CAN EDIT CUSTOM DEPENDENCIES HERE ---------------
customDependencies.push('ui.router');

//---------------------------------------------------------------------

let moduleName = "reduxPoc";
const appModule = ng1.module(moduleName, reqComponents, reqHtmls, reqStyles, childModules, customDependencies);
export default moduleName;

appModule.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('home', {
        url: '/',
        template: '<div>home works !</div>'
    });

    $urlRouterProvider.otherwise("/");
});