'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.controllers;

context
    .angular
    .module(cns.name, []);
