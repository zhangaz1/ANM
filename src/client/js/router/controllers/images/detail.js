'use strict';


var context = require('/config/context.js');
var cImages = context.namespace.modules.router.controllers.images;

context
	.angular
	.module(cImages.name)
	.controller(cImages.detail.name, [
		'$scope', 'Image',
		function($scope, Image) {
			$scope.Image = Image;
		}
	]);