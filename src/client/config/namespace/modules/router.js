'use strict';


var context = require('/config/context.js');

var router = {
    name: context.vsf('%s.router', [context.app.name]),
    base: {
        name: 'base',
        about: {
            name: 'about',
            url: '/about'
        },
        admin: {
            name: 'admin',
            url: '/admin'
        },
        books: {
            name: 'books.list'
        },
        'default': {
            name: 'default',
            url: '/'
        },
        'else': {
            name: 'else',
            url: '/else'
        },
        foo: {
            name: 'foo',
            url: '/foo'
        },
        images: {
            name: 'images',
            url: '/images'
        },
        settings: {
            name: 'settings',
            url: '/settings'
        },
        start: {
            name: 'start',
            url: '/start'
        }
    },
    books: {
        name: 'books',
        'default': {
            name: 'default'
        },
        'detail': {
            name: 'detail'
        },
        edit: {
            name: 'edit'
        },
        list: {
            name: 'list'
        }
    }
};

router.controllers = {
    name: context.vsf('%s.controllers', [router.name])
};

router.controllers.base = {
    name: context.vsf('%s.base', [router.controllers.name])
};

module.exports = router;
