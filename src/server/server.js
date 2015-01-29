'use strict';

var http = require('http');

function run(appContext, cb) {
    var server = http.createServer();
    server.on('request', appContext.app.callback());
    return server.listen(appContext.config.port, cb);
};

module.exports = {
    run: run
};
