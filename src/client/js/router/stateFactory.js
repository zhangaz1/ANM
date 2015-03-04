'use strict';


var context = require('/config/context.js');

module.exports = function(treeName, name) {
    var isDefault = !name || name == 'default';

    var state = isDefault ? {
        abstract: true,
        name: treeName,
        url: '/' + treeName
    } : {
        name: treeName + '.' + name,
        url: '/' + name
    };

    state.template = context.templates[treeName][name];

    return state;
};
