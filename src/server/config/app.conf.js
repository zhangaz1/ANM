'use strict';

var pathHelper = require('path-helper')(__dirname);

module.exports = {
	mongoUrl: 'localhost:27017',
	port: process.env.PORT || 3000,
	client: pathHelper.resolve('../../client')
};