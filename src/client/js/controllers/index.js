'use strict';


function createModule(context) {
    var modules = [];

    var controllers = {
        'header': require('./base/header.js'),
        'footer': require('./base/footer.js'),

        'home': require('./home.js'),
        'content': require('./content.js')
    };

    var am = angular
        .module(context.app.name + '.controllers', modules);

    context
        ._
        .keysIn(controllers)
        .forEach(function(controllerName) {
            am.controller(
                controllerName + 'Controller',
                controllers[controllerName]
            );
        });

    return am;
}

module.exports = function(context) {
    return {
        am: createModule(context)
    };
};
