'use strict';

var pathHelper = require('path-helper')(__dirname);

module.exports = {
	mongoUrl: 'mongodb://127.0.0.1:27017/ANM',
	port: process.env.PORT || 3000,
	client: pathHelper.resolve('../../client')
};