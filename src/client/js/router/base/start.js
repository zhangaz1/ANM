'use strict';


var context = require('/config/context.js');

module.exports = {
    name: 'start',
    url: '/start',
    template: context.templates.base.start,
    controller: 'headerController'
};
