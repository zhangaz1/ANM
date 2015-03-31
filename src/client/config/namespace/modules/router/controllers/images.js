'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
	return {
		name: context.vsf('%s.images', [router.controllers.name]),
		list: {
			name: context.vsf('%s_%sController', [router.images.name, 'list'])
		},
		edit: {
			name: context.vsf('%s_%sController', [router.images.name, 'edit'])
		},
		detail: {
			name: context.vsf('%s_%sController', [router.images.name, 'detail'])
		}
	};
};