'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var books = router.books;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(books.name, books.default.name);

state.data = {
    states: ['list', 'add']
};

state.controller = router.controllers.books.default.name;

module.exports = state;
