'use strict';


var context = require('/config/context.js');

var controllers = {
    name: context.vsf('%s.controllers', [context.app.name]),
    base: {
        name: 'base',
        content: {
            name: 'contentController'
        },
        home: {
            name: 'homeController'
        }
    },
    books: {
        name: 'booksController'
    }
};

module.exports = controllers;
