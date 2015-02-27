'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.directives.controllers;

context
    .angular
    .module(cns.name)
    .controller(cns.footer.name, [
        '$scope',
        function($scope) {
            $scope.footer = {
                author: 'zhangaz1@hotmail.com',
                copyrights: '©Right本项目源码受开源协议保护。',
                version: '0.0.1',
                about: {
                    name: context.namespace.modules.router.base.about.name,
                    text: '关于'
                }
            };
        }
    ]);
