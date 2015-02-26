'use strict';


var context = require('/config/context.js');
var books = context.namespace.modules.router.books;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(books.name, books.detail.name);

state.url += '/{id}';

module.exports = state;
