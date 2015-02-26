'use strict';


var context = require('/config/context.js');

function createModule() {
    var controllers = require('./controllers/index.js');

    var modules = [
        'ui.router',
        controllers.am.name
    ];

    var am = angular
        .module(context.app.name + '.router', modules);

    return am;
}

module.exports = {
    am: createModule(),
    run: require('./run.js'),
    config: require('./config.js')
};
