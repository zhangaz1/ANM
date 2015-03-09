'use strict';


var context = require('/config/context.js');

module.exports = function(router) {
    return {
        name: context.vsf('%s.layout', [router.states.name]),
        'default': {
            name: context.vsf('%s_%sController', [router.layout.name, 'default'])
        }
    };
};
