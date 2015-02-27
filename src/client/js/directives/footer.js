'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

context
    .angular
    .module(dns.name)
    .directive(dns.footer.name, function() {
        return {
            restrict: 'E',
            transclude: true,
            template: context.templates.directives.footer,
            controller: dns.controllers.footer.name,
            replace: true
        };
    });
