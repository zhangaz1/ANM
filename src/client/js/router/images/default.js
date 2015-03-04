'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var images = router.images;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(images.name, images.default.name);

state.views = {
    '': state,
    '@': {
        template: 'hhhh'
    },
    'lp': {
        template: 'images<span ui-view="lp"></span>'
    }
};

state.abstract = false;

module.exports = state;
