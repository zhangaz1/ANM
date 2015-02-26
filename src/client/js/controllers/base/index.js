'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var am = angular
        .module(context.namespace.modules.controllers.base.name, modules);

    require('./content.js');
    require('./home.js');

    return am;
}

module.exports = {
    am: createModule()
};
