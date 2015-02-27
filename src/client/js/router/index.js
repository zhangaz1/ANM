'use strict';


var context = require('/config/context.js');
var rns = context.namespace.modules.router;

var modules = [
    'ui.router',
    rns.controllers.name
];

require('./controllers/index.js');

context
    .angular
    .module(rns.name, modules);


module.exports = {
    run: require('./run.js'),
    config: require('./config.js')
};
