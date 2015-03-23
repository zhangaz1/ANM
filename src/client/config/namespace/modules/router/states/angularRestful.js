'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
	return {
		name: context.vsf('%s.angularRestful', [router.states.name]),
		'default': {
			name: context.vsf('%s_%sController', [router.angularRestful.name, 'default'])
		}
	};
};