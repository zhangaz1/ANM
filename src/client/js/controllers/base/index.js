'use strict';


var context = require('/config/context.js');

var modules = [];

context
    .angular
    .module(context.namespace.modules.controllers.base.name, modules);

require('./content.js');
require('./home.js');
