'use strict';

var koa = require('koa');

function addHandlers(appContext) {
    require('./common/logger')(appContext);
    require('./common/staticResource')(appContext);
}

function initApp(appContext) {
    appContext.app = koa();

    addHandlers(appContext);
}

module.exports = {
    initApp: initApp
};
