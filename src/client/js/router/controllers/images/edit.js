'use strict';


var context = require('/config/context.js');
var cImages = context.namespace.modules.router.controllers.images;

context
	.angular
	.module(cImages.name)
	.controller(cImages.edit.name, [
		'$scope', 'Image',
		function($scope, Image) {
			$scope.Image = Image;

			$scope.save = function() {
				var img = Image.editImage;

				if (angular.isDefined(img.id)) {
					img.$update(function() {
						Image.editImage = null;
						Image.changedOn = new Date();
					});
				} else {
					img.$create(function($img) {
						Image.editImage = null;
						Image.changedOn = new Date();
					});
				}
			};

			$scope.cancel = function() {
				Image.editImage = null;
			};
		}
	]);