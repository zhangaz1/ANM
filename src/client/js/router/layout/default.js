'use strict';


var context = require('/config/context.js');
var layout = context.namespace.modules.router.layout;
var states = context.namespace.modules.router.states.layout;

module.exports = {
    abstract: true,
    name: states.default.name,
    template: context.templates[layout.name][layout.default.name]
};
