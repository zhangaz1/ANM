'use strict';


var context = require('/config/context.js');
var cImages = context.namespace.modules.router.controllers.images;

context
	.angular
	.module(cImages.name)
	.controller(cImages.list.name, [
		'$scope', 'Image',
		function($scope, Image) {
			$scope.images = Image.query();
			$scope.Image = Image;

			$scope.$watch('Image.changedOn', function(newValue, oldValue, scope) {
				$scope.images = Image.query();
			});

			$scope.create = function() {
				var img = Image.editImage = new Image();
			};

			$scope.detail = function(img) {
				Image.showImage = img;
			}

			$scope.edit = function(img) {
				Image.editImage = img;
			}

			$scope.remove = function(img) {
				img.$destroy(function() {
					$scope.images.splice($scope.images.indexOf(img), 1)
				})
			}
		}
	]);