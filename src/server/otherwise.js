'use strict';


var urlUtil = require('url');

module.exports = function(appContext) {
	appContext.app.use(function*() {
		var url = urlUtil.parse(this.request.url, true);

		url.query.startPath = url.pathname;

		delete url.search;
		delete url.pathname;

		return this.redirect('/' + urlUtil.format(url));
	});
};