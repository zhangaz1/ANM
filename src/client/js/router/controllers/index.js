'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.router.controllers;

var modules = [
    cns.base.name,
    cns.books.name,
    cns.images.name
];

context
    .angular
    .module(cns.name, modules);

require('./base/index.js');
require('./books/index.js');
require('./images/index.js');
