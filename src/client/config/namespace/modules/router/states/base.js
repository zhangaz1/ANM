'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    return {
        name: context.vsf('%s.base', [router.states.name]),
        'start': {
            name: context.vsf('%s_%sController', [router.base.name, 'start'])
        }
    };
};
