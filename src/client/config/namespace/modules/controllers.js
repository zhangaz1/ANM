'use strict';


var context = require('/config/context.js');

var controllers = {
    name: context.vsf('%s.controllers', [context.app.name])
};

module.exports = controllers;
