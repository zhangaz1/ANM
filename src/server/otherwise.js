'use strict';


var pathHelper = require('path-helper')(__dirname);
var sendfile = require('koa-sendfile');

module.exports = function(appContext) {
	appContext.app.use(function*() {
		// return this.response.redirect('back');

		// return this.redirect('/');

		var stats =
			yield * sendfile.call(this, pathHelper.resolve('./../client/index.html'));
		if (!this.status) {
			this.throw(404);
		}
	});
};