'use strict';

var staticServer = require('koa-static');

module.exports = function(appContext) {
	var clientDir = appContext.config.client;
	var publicFiles = staticServer(clientDir);
	publicFiles._name = 'static/client';

	appContext.app.use(publicFiles);
};