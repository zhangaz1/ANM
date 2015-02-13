'use strict';


var context = require('/config/context.js');

module.exports = function() {
    return {
        restrict: 'E',
        transclude: true,
        template: context.templates.directives.header,
        controller: 'headerController',
        replace: true
    };
};
