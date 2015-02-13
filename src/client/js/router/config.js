'use strict';


var context = require('/config/context.js');

module.exports = ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider
        //     .when('/c?id', '/contacts/:id')
        //     .when('/user/:id', '/contact/:id')
        //     .when('/s', '/start')
        //     .otherwise('/');

        var stateTrees = {
            'base': require('./base/index.js'),
            books: require('./books/index.js')
        };

        context
            ._
            .keysIn(stateTrees)
            .forEach(function(stateTreeName) {
                stateTrees[stateTreeName]($stateProvider);
            });
    }
];
