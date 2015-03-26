'use strict';


var context = require('/config/context.js');

var services = {
	name: context.vsf('%s.services', [context.app.name]),
	constant: {
		name: 'constant'
	},
	value: {
		name: 'value'
	},
	factory: {
		name: 'factory'
	},
	factories: {
		name: 'factories',
		images: {
			name: 'Image',
			url: '/api/images/:id'
		}
	}
};

module.exports = services;