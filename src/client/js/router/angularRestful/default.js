'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var angularRestful = router.angularRestful;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(angularRestful.name, angularRestful.default.name);

delete state.abstract;
// state.controller = router.controllers.angularRestful.default.name;

module.exports = state;