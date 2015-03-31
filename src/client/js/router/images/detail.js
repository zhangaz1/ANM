'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var images = router.images;

module.exports = {
	template: context.templates[images.name][images.detail.name],
	controller: router.controllers.images.detail.name
};