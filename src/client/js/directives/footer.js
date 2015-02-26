'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

angular
    .module(dns.name)
    .directive(dns.footer.name, function() {
        return {
            restrict: 'E',
            transclude: true,
            template: context.templates.directives.footer,
            controller: 'footerController',
            replace: true
        };
    });
