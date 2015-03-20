'use strict';


var mongoose = require('mongoose');

module.exports = function(appContext) {
	mongoose.connect(appContext.config.mongoUrl);
	appContext.mongoose = mongoose;
};