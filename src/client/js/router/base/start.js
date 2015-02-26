'use strict';


var context = require('/config/context.js');
var start = context.namespace.modules.router.base.start;

module.exports = {
    name: start.name,
    url: start.url,
    template: context.templates.base.start,
    controller: 'headerController'
};
