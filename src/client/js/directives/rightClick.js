'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

context
    .angular
    .module(dns.name)
    .directive(dns.rightClick.name, function($parse) {
        return function(scope, element, attrs) {
            var fn = $parse(attrs.rightClick);
            element.bind('contextmenu', function(event) {
                scope.$apply(function() {
                    event.preventDefault();
                    fn(scope, {
                        $event: event
                    });
                });
            });
        };
    });
