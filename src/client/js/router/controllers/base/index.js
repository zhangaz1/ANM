'use strict';


var context = require('/config/context.js');
var bns = context.namespace.modules.router.controllers.base;

context
    .angular
    .module(bns.name, []);

require('./start.js');
