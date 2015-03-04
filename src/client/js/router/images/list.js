'use strict';


var context = require('/config/context.js');
var images = context.namespace.modules.router.images;

var stateFactory = require('./../stateFactory.js');

var state = stateFactory(images.name, images.list.name);

state.ivews = {
    '': state,
    'lp': {
        template: 'list<span ui-view="lp"></span>'
    }
};

module.exports = state;
