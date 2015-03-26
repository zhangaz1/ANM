'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services.factories;

context
	.angular
	.module(sns.name)
	.factory(sns.images.name, ['$restful', function($restful) {
		return $restful(sns.images.url, {
			params: {
				id: '@id'
			}
		});
	}]);