'use strict';


var context = require('/config/context.js');

module.exports = {
    name: 'settings',
    url: '/settings',
    template: context.templates.base.settings,
    controller: 'headerController as hc'
};
