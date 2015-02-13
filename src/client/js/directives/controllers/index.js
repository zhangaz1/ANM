'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var controllers = {
        'header': require('./header.js'),
        'footer': require('./footer.js')
    };

    var am = angular
        .module(context.app.name + 'directives.controllers', modules);

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
