'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.directives.controllers;
var base = context.namespace.modules.router.base;

angular
    .module(cns.name)
    .controller(cns.header.name, [
        '$scope',
        function($scope) {
            $scope.header = {
                leftNavs: [{
                    name: base.default.name,
                    text: '首页'
                }, {
                    name: base.start.name,
                    text: '起步'
                }, {
                    name: base.settings.name,
                    text: '设置'
                }, {
                    name: base.books.name,
                    text: '书'
                }, {
                    name: base.images.name,
                    text: '图片'
                }, {
                    name: base.else.name,
                    text: '其它'
                }, {
                    name: base.foo.name,
                    text: '不存在'
                }],

                rightNavs: [{
                    name: base.admin.name,
                    text: '管理'
                }]
            };
        }
    ]);
