'use strict';

var pathHelper = require('path-helper')(__dirname);

module.exports = {
    port: process.env.PORT || 3000,
    client: pathHelper.resolve('../../client')
};
