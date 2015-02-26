'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

angular
    .module(dns.name)
    .directive(dns.panel.name, function() {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
                click: '&selected'
            },
            link: function(scope, element, attrs, tabsController) {
                tabsController.addPanel(scope);
            },
            template: context.templates.directives.panel,
            replace: true
        };
    });
