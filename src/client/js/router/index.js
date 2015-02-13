'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = ['ui.router'];

    var am = angular
        .module(context.app.name + '.router', modules);

    return am;
}

module.exports = {
    am: createModule(),
    run: require('./run.js'),
    config: require('./config.js')
};
