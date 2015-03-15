'use strict';


var koa = require('koa');
var route = require('koa-route');

function addHandlers(appContext) {
	require('./common/logger.js')(appContext);
	require('./common/staticResource.js')(appContext);
	require('./api/index.js')(appContext);
	require('./otherwise.js')(appContext);
}

function initApp(appContext) {
	appContext.app = koa();
	appContext.route = route;

	addHandlers(appContext);
}

module.exports = {
	initApp: initApp
};