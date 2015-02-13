'use strict';


var context = require('/config/context.js');

module.exports = {
    name: 'admin',
    url: '/admin',
    template: context.templates.base.admin
};
