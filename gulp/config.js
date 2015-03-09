'use strict';

var pathHelper = require('path-helper')(__dirname);

var config = {
    homePage: 'http://localhost:3000/',

    appStyleFile: pathHelper.resolve('./../src/client/app.css'),
    clientAppJsFile: pathHelper.resolve('./../src/client/app.js'),
    clientBuildDir: pathHelper.resolve('./../src/client/build'),
    clientComponentsDir: pathHelper.resolve('./../src/client/components'),

    clientFiles: [
        pathHelper.resolve('./../src/client/index.html'),
        pathHelper.resolve('./../src/client/loadResource.js'),
        pathHelper.resolve('./../src/client/favicon.ico'),
        pathHelper.resolve('./../src/client/bower.json'),
        pathHelper.resolve('./../src/client/**/build/**/*.*')
    ],
    serverFiles: pathHelper.resolve('./../src/**/server/**/*.*'),
    bootFiles: [
        pathHelper.resolve('./../src/**/boot/**/*.*'),
        pathHelper.resolve('./../src/index.js'),
        pathHelper.resolve('./../package.json')
    ],
    clientReleaseDir: pathHelper.resolve('./../dist/client'),
    releaseDir: pathHelper.resolve('./../dist'),

    runWebBy: 'cmd', // 'cmd','in' // default is in
    serverUnitConfig: pathHelper.resolve('./../test/config/server.unit.conf.js'),
    karmaClientUnitConfig: pathHelper.resolve('./../test/config/karma-client.unit.conf.js'),
    karmaClientE2eConfig: pathHelper.resolve('./../test/config/karma-client.e2e.conf.js'),
    protractorClientE2eConfig: pathHelper.resolve('./../test/config/protractor-client.e2e.conf.js'),

    commonJs: pathHelper.resolve('./../common/**/*.js'),

    gulpFile: pathHelper.resolve('./../gulpfile.js'),
    gulpFiles: pathHelper.resolve('./../gulp/**/*.js'),

    serverJs: pathHelper.resolve('./../src/server/**/*.js'),
    serverUnitTestJs: pathHelper.resolve('./../test/server/unit/**/*.js'),

    src: pathHelper.resolve('./../src'),

    clientHtml: pathHelper.resolve('./../src/client/**/*.html'),
    clientCss: pathHelper.resolve('./../src/client/**/*.css'),

    clientJs: pathHelper.resolve('./../src/client/**/*.js'),
    clientTemplates: pathHelper.resolve('./../src/client/templates/**/*.html'),

    clientBuildFiles: '!' + pathHelper.resolve('./../src/client/build/*.*'),

    karmaClientUnitTestJs: pathHelper.resolve('./../test/client/unit/**/*.js'),
    karmaClientBddTestJs: pathHelper.resolve('./../test/client/bdd/karma/**/*.js'),
    protractorClientBddTestJs: pathHelper.resolve('./../test/client/bdd/protractor/**/*.js')
};

config.minFiles = [config.releaseDir + '/**/*.js'];

module.exports = config;
