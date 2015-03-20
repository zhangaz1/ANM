'use strict';


var generateApi = require('koa-mongo-rest');

module.exports = function(appContext) {
	var mongoose = appContext.mongoose;

	var schema = new mongoose.Schema({
		name: String,
		path: String
	});

	var model = mongoose.model('images', schema);

	generateApi(appContext.app, model, '/api');
};