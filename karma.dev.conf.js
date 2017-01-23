// Karma configuration

var conf = require("./karma.conf.json");

module.exports = function(config) {
    conf.coverageReporter = {
        type: 'text'
    };

    conf.logLevel = config.LOG_INFO;
    conf.browsers = [ "Chrome" ];

    conf.webpack = require('./webpack.config');
    config.set(conf);
};