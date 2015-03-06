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
            name: 'images'
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
    layout: {
        name: 'layout',
        default: {
            name: 'default'
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
    },
    images: {
        name: 'images',
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

require('./routerControllers.js')(router);
require('./routerStates.js')(router);

module.exports = router;
