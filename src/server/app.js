'use strict';


var koa = require('koa');
var route = require('koa-route');
var router = require('koa-router');

function addHandlers(appContext) {
	require('./common/logger.js')(appContext);
	require('./common/staticResource.js')(appContext);
	require('./api/index.js')(appContext);
	require('./otherwise.js')(appContext);
}

function initApp(appContext) {
	var app = koa();

	appContext.app = app;
	appContext.route = route;
	appContext.router = router;

	app.use(router(app));

	addHandlers(appContext);
}

module.exports = {
	initApp: initApp
};