'use strict';


var context = require('/config/context.js');

module.exports = ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider
        //     .when('/c?id', '/contacts/:id')
        //     .when('/user/:id', '/contact/:id')
        //     .when('/s', '/start')
        //     .otherwise('/');

        require('./base/index.js')($stateProvider);
        require('./books/index.js')($stateProvider);
        require('./images/index.js')($stateProvider);
    }
];
