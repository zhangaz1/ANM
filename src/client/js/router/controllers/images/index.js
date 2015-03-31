'use strict';


var context = require('/config/context.js');
var bns = context.namespace.modules.router.controllers.images;

context
	.angular
	.module(bns.name, []);

require('./list.js');
require('./edit.js');
require('./detail.js');