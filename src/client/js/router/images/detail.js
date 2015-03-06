'use strict';


var context = require('/config/context.js');
var images = context.namespace.modules.router.images;

module.exports = {
    template: context.templates[images.name][images.detail.name]
};
