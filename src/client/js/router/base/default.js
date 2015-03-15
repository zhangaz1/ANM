'use strict';


var context = require('/config/context.js');
var _default = context.namespace.modules.router.base.default;

module.exports = {
	name: _default.name,
	url: _default.url,
	template: context.templates.base['default'],
	data: {
		customData1: 5,
		customData2: 'blue'
	},
	controller: function($scope, simpleData, promiseData,
		promiseData2, translations, translations2, greeting) {
		$scope.title = 'My Contract';
		$scope.simpleData = simpleData;
		$scope.promiseData = promiseData;
		$scope.translations = translations;
		$scope.translations2 = translations2;
		$scope.greeting = greeting;

		$scope.$on('$viewContentLoading',
			function(event, viewConfig) {
				console.log('$viewContentLoading(default scope): ', viewConfig);
			});
	},
	onEnter: function(simpleData) {
		if (simpleData) {
			alert('进入首页事件');
		}
	},
	onExit: function(simpleData) {
		if (simpleData) {
			alert('退出首页事件');
		}
	},
	resolve: {
		simpleData: function() {
			return {
				value: 'simple!'
			};
		},
		promiseData: function($http) {
			return $http({
				method: 'GET',
				url: '/someData/1'
			});
		},
		promiseData2: function($http) {
			return $http({
				method: 'GET',
				url: '/someData/5'
			}).then(function(data) {
				// retrun doSomeStuffFirst(data);
				return data;
			});
		},
		translations: 'factory',
		translations2: function(factory, $stateParams) {
			return factory.getPrivate();
		},
		greeting: function($q, $timeout) {
			var deferred = $q.defer();
			$timeout(function() {
				deferred.resolve('Hello!');
			}, 1);
			return deferred.promise;
		}
	}
};