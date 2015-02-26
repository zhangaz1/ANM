'use strict';


var context = require('/config/context.js');
var subModuleName = 'base';

function createModule(parentModuleName) {
    var moduleName = parentModuleName + '.' + subModuleName;

    var modules = [];

    var controllers = {
        // 'home': require('./base/home.js'),
        // 'content': require('./base/content.js'),
        // 'books': require('./books.js')
    };

    var am = angular
        .module(moduleName, modules);

    context.modulesLoader(controllers,
        function(controllerName) {
            am.controller(
                subModuleName + '_' + controllerName + 'Controller',
                controllers[controllerName]
            );
        });

    return am;
}

module.exports = function(parentModuleName) {
    return {
        am: createModule(parentModuleName)
    }
};
