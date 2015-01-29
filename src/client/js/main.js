'use strict';


function createModule(context) {

    var modules = [
        require('./controllers/index.js')(context).am.name
    ];

    var am = context.angular
        .module(context.app.name, modules)
        .run(['$rootScope', function($rootScope) {
            $rootScope.myApp = context.app;
        }]);

}

module.exports = function(context) {
    return {
        am: createModule(context)
    };
};
