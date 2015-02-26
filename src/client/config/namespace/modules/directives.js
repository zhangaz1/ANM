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

module.exports = directives;
