'use strict';


var context = require('/config/context.js');

module.exports = function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function($scope) {
            var panels = $scope.panels = [];

            $scope.select = function(panel) {
                angular.forEach(panels, function(panel) {
                    panel.selected = false;
                });
                panel.selected = true;
                if (panel.click) {
                    panel.click();
                }
            }

            this.addPanel = function(panel) {
                if (panels.length == 0) {
                    $scope.select(panel);
                }
                panels.push(panel);
            }
        }],
        template: context.templates.directives.tabs,
        replace: true
    };
};
