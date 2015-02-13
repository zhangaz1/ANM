'use strict';


var context = require('/config/context.js');

module.exports = function() {
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
};
