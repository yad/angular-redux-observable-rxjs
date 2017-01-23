// Karma configuration

var conf = require("./karma.conf.json");

module.exports = function(config) {

    conf.coverageReporter = {
        type: 'lcov',
        dir: 'Karma/results/',
        subdir: 'coverage'
    };
    
    conf.sonarQubeUnitReporter = {
        outputFile: 'Karma/results/test-results.xml',
        useBrowserName: false
    };
    conf.reporters.push("sonarqubeUnit"),


    //conf.browserNoActivityTimeout = 10000;
    conf.browserDisconnectTolerance = 5;
    conf.logLevel = config.LOG_INFO;


    // enable / disable watching file and executing tests whenever any file changes
    conf.autoWatch = false;

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    conf.singleRun = true;

    conf.browsers = [ "PhantomJS" ];
        
    conf.webpack = require('./webpack.config');
    config.set(conf);
};