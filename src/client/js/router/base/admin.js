'use strict';


var context = require('/config/context.js');
var admin = context.namespace.modules.router.base.admin;

module.exports = {
    name: admin.name,
    url: admin.url,
    template: context.templates.base.admin
};
