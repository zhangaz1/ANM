'use strict';


var context = require('/config/context.js');

var router = {
	name: context.vsf('%s.router', [context.app.name]),
	directToRoute: require('./directToRoute.js'),
	base: require('./base.js'),
	layout: require('./layout.js'),
	books: require('./books.js'),
	angularRestful: require('./angularRestful.js'),
	images: require('./images.js')
};

require('./controllers/index.js')(router);
require('./states/index.js')(router);

module.exports = router;