'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    return {
        name: context.vsf('%s.books', [router.states.name]),
        'default': {
            name: context.vsf('%s_%sController', [router.books.name, 'default'])
        }
    };
};
