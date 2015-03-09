'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    router.controllers = {
        name: context.vsf('%s.controllers', [router.name])
    };

    router.controllers.base = require('./base.js')(router);
    router.controllers.books = require('./books.js')(router);
    router.controllers.images = require('./images.js')(router);
};
