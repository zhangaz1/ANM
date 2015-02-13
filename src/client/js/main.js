'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = {
        router: require('./router/index.js'),
        services: require('./services/index.js'),
        directives: require('./directives/index.js'),
        controllers: require('./controllers/index.js')
    };

    var dmodules = [];

    context.modulesLoader(modules,
        function(moduleName) {
            dmodules.push(modules[moduleName].am.name);
        });

    var am = context.angular
        .module(context.app.name, dmodules)
        .run(['$rootScope',
            function($rootScope) {
                $rootScope.myApp = context.app;
            }
        ])
        .run(modules.router.run)
        .config(modules.router.config);

}

module.exports = {
    am: createModule()
};
