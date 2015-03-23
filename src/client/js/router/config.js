'use strict';


var context = require('/config/context.js');

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {

		// $urlRouterProvider
		//     .when('/c?id', '/contacts/:id')
		//     .when('/user/:id', '/contact/:id')
		//     .when('/s', '/start')
		//     .otherwise('/');

		require('./directToRoute.js')($stateProvider);

		require('./base/index.js')($stateProvider);
		require('./layout/index.js')($stateProvider);
		require('./books/index.js')($stateProvider);
		require('./angularRestful/index.js')($stateProvider);
		require('./images/index.js')($stateProvider);

		$urlRouterProvider.otherwise('/');

		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');
	}
];