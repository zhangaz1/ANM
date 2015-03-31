'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services.factories;

context
	.angular
	.module(sns.name, ['restful']);

require('./images.js');