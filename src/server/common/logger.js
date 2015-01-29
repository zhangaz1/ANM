'use strict';

var logger = require('koa-logger');

module.exports = function(appContext) {
    appContext.app.use(logger());
};
