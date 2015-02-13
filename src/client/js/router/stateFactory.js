'use strict';


var context = require('/config/context.js');

module.exports = function(treeName, name) {
    var isDefault = !name || name == 'default';

    return isDefault ? {
        name: treeName,
        url: '/' + treeName,
        templateUrl: '/templates/' + treeName + '/default.html'
    } : {
        name: treeName + '.' + name,
        url: '/' + name,
        template: context.templates[treeName][name]
    };
};
