'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services;

function createModule() {
    var modules = [];

    var am = angular
        .module(sns.name, modules);

    require('./constant.js');
    require('./value.js');
    require('./factory.js');

    return am;
}

module.exports = {
    am: createModule()
};
