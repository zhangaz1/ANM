'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    router.states = {
        name: context.vsf('%s.states', [router.name])
    };

    router.states.layout = {
        name: context.vsf('%s.layout', [router.states.name]),
        default: {
            name: 'layout_default'
        }
    };


    router.states.base = {
        name: context.vsf('%s.base', [router.states.name]),
        start: {
            name: 'startController'
        }
    };

    router.states.books = {
        name: context.vsf('%s.books', [router.states.name]),
        default: {
            name: 'books_defaultController'
        }
    };

    router.states.images = {
        name: context.vsf('%s.images', [router.states.name]),
        default: {
            name: 'defaultController'
        }
    };
};
