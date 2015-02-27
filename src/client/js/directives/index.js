'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

var modules = [dns.controllers.name];

context
    .angular
    .module(dns.name, modules);

require('./controllers/index.js');

require('./rightClick.js');

require('./panel.js');
require('./tabs.js');

require('./header.js');
require('./footer.js');
