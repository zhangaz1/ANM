'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var controllers = {
        'header': require('./base/header.js'),
        'footer': require('./base/footer.js'),

        'home': require('./home.js'),
        'content': require('./content.js')
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
