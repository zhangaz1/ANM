'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

angular
    .module(dns.name)
    .directive(dns.header.name, function() {
        return {
            restrict: 'E',
            transclude: true,
            template: context.templates.directives.header,
            controller: 'headerController',
            replace: true
        };
    });
