'use strict';


var context = require('/config/context.js');
var bns = context.namespace.modules.router.controllers.books;

context
    .angular
    .module(bns.name, []);

require('./default.js');
