'use strict';


var context = require('/config/context.js');
var bns = context.namespace.modules.router.controllers.images;

context
    .angular
    .module(bns.name, []);

require('./default.js');
