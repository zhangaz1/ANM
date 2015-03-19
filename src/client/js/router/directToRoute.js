'use strict';


var context = require('/config/context.js');
var directToRoute = context.namespace.modules.router.directToRoute;

module.exports = function($stateProvider) {
	$stateProvider
		.state({
			name: directToRoute.name,
			url: directToRoute.url,
			controller: function($location, $state, $cookieStore) {
				var search = $location.search();

				var path = search.startPath;
				delete search.startPath;

				// alert($cookieStore.get('startPath')); // 静态服务未重新返回cookie

				$location.search(search);
				$location.path(path);
			}
		});
};