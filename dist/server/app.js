'use strict';

var koa = require('koa');
var route = require('koa-route');

function addHandlers(appContext) {
    require('./common/logger')(appContext);
    require('./common/staticResource')(appContext);
    require('./api')(appContext);
}

function initApp(appContext) {
    appContext.app = koa();
    appContext.route = route;

    addHandlers(appContext);
}

module.exports = {
    initApp: initApp
};
