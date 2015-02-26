'use strict';


var context = require('/config/context.js');
var about = context.namespace.modules.router.base.about;

module.exports = {
    name: about.name,
    url: about.url,
    template: context.templates.base.about
};
