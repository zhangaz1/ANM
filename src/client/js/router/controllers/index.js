'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.router.controllers;

var modules = [
    cns.base.name
];

context
    .angular
    .module(cns.name, modules);

require('./base/index.js');
