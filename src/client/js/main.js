'use strict';

var mRouter = require('./router/index.js');
var mController = require('./controllers/index.js');

function createModule(context) {

    var miRouter = mRouter(context);
    var miController = mController(context);

    var modules = [
        miRouter.am.name,
        miController.am.name
    ];

    var am = context.angular
        .module(context.app.name, modules)
        .run(['$rootScope',
            function($rootScope) {
                $rootScope.myApp = context.app;
            }
        ])
        .run(miRouter.run)
        .config(miRouter.config);

}

module.exports = function(context) {
    return {
        am: createModule(context)
    };
};
