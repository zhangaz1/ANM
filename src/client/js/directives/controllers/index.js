'use strict';


var context = require('/config/context.js');

context
    .angular
    .module(context.namespace.modules.directives.controllers.name, []);

require('./header.js');
require('./footer.js');
