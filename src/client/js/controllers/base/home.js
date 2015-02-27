'use strict';


var context = require('/config/context.js');
var bcns = context.namespace.modules.controllers.base;

context
    .angular
    .module(bcns.name)
    .controller(bcns.home.name, [
        '$scope',
        function($scope) {
            $scope.start = {
                title: '起步',
                content: '简要介绍 TheWeather，以及如何使用,设置，等等。'
            };
        }
    ]);
