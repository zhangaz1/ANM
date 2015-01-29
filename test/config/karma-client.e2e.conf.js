'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['ng-scenario', 'jasmine'],
        files: [
            // 'libs/should.js',
            '../client/bdd/karma/**/*.js'
        ],
        reporters: ['progress', 'story'],
        port: 9877,
        // colors: true,
        // logLevel: config.LOG_INFO,
        // autoWatch: true,
        browsers: ['Chrome' /*'PhantomJS' 'Chrome' */ ],
        // captureTimeout: 60000,
        singleRun: true,
        urlRoot: '/_karma_/',
        proxies: {
            '/': 'http://localhost:3000/'
        }
    });
};
