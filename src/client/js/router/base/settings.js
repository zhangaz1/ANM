'use strict';


var context = require('/config/context.js');
var settings = context.namespace.modules.router.base.settings;

module.exports = {
    name: settings.name,
    url: settings.url,
    template: context.templates.base.settings,
    controller: 'headerController as hc'
};
