'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
	router.states = {
		name: context.vsf('%s.states', [router.name])
	};

	router.states.layout = require('./layout.js')(router);
	router.states.base = require('./base.js')(router);
	router.states.books = require('./books.js')(router);
	router.states.angularRestful = require('./angularRestful.js')(router);
	router.states.images = require('./images.js')(router);
};