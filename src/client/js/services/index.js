'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services;

context
	.angular
	.module(sns.name, [sns.factories.name]);

require('./constant.js');
require('./value.js');
require('./factory.js');

require('./factories/index.js');