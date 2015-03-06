'use strict';


var context = require('/config/context.js');
var router = context.namespace.modules.router;
var images = router.images;

var state = {
    name: images.name,
    url: '/' + images.name,
    parent: router.states.layout.default.name,
    views: {
        breadcrumb: {
            template: 'images'
        },
        list: require('./list.js'),
        detail: require('./detail.js')
    }
};

module.exports = state;
