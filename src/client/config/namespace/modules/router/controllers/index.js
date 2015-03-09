'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    router.controllers = {
        name: context.vsf('%s.controllers', [router.name])
    };

    router.controllers.base = {
        name: context.vsf('%s.base', [router.controllers.name]),
        start: {
            name: 'startController'
        }
    };

    router.controllers.books = {
        name: context.vsf('%s.books', [router.controllers.name]),
        default: {
            name: 'books_defaultController'
        }
    };

    router.controllers.images = {
        name: context.vsf('%s.images', [router.controllers.name]),
        default: {
            name: 'defaultController'
        }
    };
};
