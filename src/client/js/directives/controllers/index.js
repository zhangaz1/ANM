'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var am = angular
        .module(context.namespace.modules.directives.controllers.name, modules);

    require('./header.js');
    require('./footer.js');

    return am;
}

module.exports = {
    am: createModule()
};
