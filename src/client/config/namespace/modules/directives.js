'use strict';


var context = require('/config/context.js');

var directives = {
    name: context.vsf('%s.directives', [context.app.name]),
    rightClick: {
        name: 'rightClick'
    },
    panel: {
        name: 'panel'
    },
    tabs: {
        name: 'tabs'
    },
    header: {
        name: 'dheader'
    },
    footer: {
        name: 'dfooter'
    }
};

directives.controllers = {
    name: context.vsf('%s.controllers', [directives.name]),
    header: {
        name: 'dheaderController'
    },
    footer: {
        name: 'dfooterController'
    }
};

module.exports = directives;
