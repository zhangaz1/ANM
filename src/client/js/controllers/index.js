'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var controllers = {
        'home': require('./base/home.js'),
        'content': require('./base/content.js'),
        'books': require('./books.js')
    };

    var am = angular
        .module(context.app.name + '.controllers', modules);

    context.modulesLoader(controllers,
        function(controllerName) {
            am.controller(
                controllerName + 'Controller',
                controllers[controllerName]
            );
        });

    return am;
}

module.exports = {
    am: createModule()
};
