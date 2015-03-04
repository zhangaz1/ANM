'use strict';


var context = require('/config/context.js');
var images = context.namespace.modules.router.images;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(images.name, images.edit.name);

state.url += '/{id}';

module.exports = state;
