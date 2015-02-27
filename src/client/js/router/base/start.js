'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var start = router.base.start;

module.exports = {
    name: start.name,
    url: start.url,
    template: context.templates.base.start,
    controller: router.controllers.base.start.name
};
