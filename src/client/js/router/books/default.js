'use strict';


var stateFactory = require('./../stateFactory.js');
var name = 'default';

module.exports = function(treeName) {
    var state = stateFactory(treeName, name);

    state.data = {
        states: ['list', 'detail', 'edit']
    };

    state.controller = ['$scope', '$state', function($scope, $state) {
        $scope.panels = $state.current.data.states;

        $scope.selected = function() {
            alert('更改了tab');
        };

        $scope.rightClick = function(scope, event) {
            alert('right click');
        };
    }];

    return state;
};
