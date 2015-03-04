'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var books = router.books;
var cBooks = router.controllers.books;

context
    .angular
    .module(cBooks.name)
    .controller(cBooks.default.name, ['$scope', '$state', function($scope, $state) {
        $scope.panels = $state.current.data.states;
        $scope.states = {
            list: books.list.name,
            add: books.edit.name
        };

        $scope.selected = function(state) {
            $state.go(books.name + '.' + $scope.states[state]);
        };

        $scope.rightClick = function(scope, event) {
            alert('right click');
        };
    }]);
