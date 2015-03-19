'use strict';


var urlUtil = require('url');

module.exports = function(appContext) {
	appContext.app.use(function*() {
		var url = urlUtil.parse(this.request.url, true);

		// this.cookies.set('startPath', url.pathname); // 静态服务未重新返回cookie
		url.query.startPath = url.pathname;

		delete url.search;
		delete url.pathname;

		return this.redirect('/' + urlUtil.format(url));
	});
};