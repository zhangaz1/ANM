'use strict';


var context = require('/config/context.js');

var router = require('./router/index.js');
require('./services/index.js');
require('./directives/index.js');
require('./controllers/index.js');


var mns = context.namespace.modules;
var dmodules = [
    mns.router.name,
    mns.services.name,
    mns.directives.name,
    mns.controllers.name
];

context
    .angular
    .module(context.app.name, dmodules)
    .run(['$rootScope', function($rootScope) {
        $rootScope.myApp = context.app;
    }])
    .run(router.run)
    .config(router.config);
