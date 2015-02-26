'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.controllers;

function createModule() {
    var modules = [cns.base.name];

    var am = angular
        .module(cns.name, modules);

    require('./base/index.js');
    require('./books.js');

    return am;
}

module.exports = {
    am: createModule()
};
