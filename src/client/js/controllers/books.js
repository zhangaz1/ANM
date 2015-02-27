'use strict';


var context = require('/config/context.js');
var cns = context.namespace.modules.controllers;

context
    .angular
    .module(cns.name)
    .controller(cns.books.name, [
        '$scope',
        function($scope) {}
    ]);
