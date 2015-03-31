'use strict';

var appContext = {
	config: require('./config/app.conf'),
	debug: require('debug')
};

require('./app').initApp(appContext);

var exports =
	module.exports = {
		start: function() {
			var httpServer = require('./server').run(appContext);
			var port = httpServer.address().port;
			console.log('server is listening on ' + port);
		}
	};

if (!module.parent) {
	exports.start();
}