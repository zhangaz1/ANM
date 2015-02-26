'use strict';


var context = require('/config/context.js');

var services = {
    name: context.vsf('%s.services', [context.app.name]),
    constant: {
        name: 'constant'
    },
    value: {
        name: 'value'
    },
    factory: {
        name: 'factory'
    }
};

module.exports = services;
