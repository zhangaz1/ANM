'use strict';


module.exports = function(appContext) {
	appContext.app.use(function*() {
		return this.response.redirect('back');
	});
};