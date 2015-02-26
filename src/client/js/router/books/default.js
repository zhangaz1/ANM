'use strict';


var context = require('/config/context.js');
var books = context.namespace.modules.router.books;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(books.name, books.default.name);

state.data = {
    states: ['list', 'add']
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

module.exports = state;
