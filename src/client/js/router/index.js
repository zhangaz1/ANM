'use strict';

require('./../../bower_components/angular-ui-router/release/angular-ui-router.js');

var run = ['$rootScope', '$state', '$stateParams', '$urlRouter',
    function($rootScope, $state, $stateParams, $urlRouter) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;


        // $rootScope.$on('$locationChangeSuccess', function(evt) {
        //     // Halt state change from even starting
        //     evt.preventDefault();
        //     // Perform custom logic
        //     var meetsRequirement = true;
        //     // Continue with the update and state transition if logic allows
        //     if (meetsRequirement) {
        //         $urlRouter.sync();
        //     }
        // });
    }
];

var config = ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/c?id', '/contacts/:id')
            .when('/user/:id', '/contact/:id')
            .otherwise('/');

        $stateProvider
            .state('about', {
                url: '/about',
                template: '<h1>Welcome to UI-Router Demo</h1>'
            });
    }
];

function createModule(context) {
    var modules = ['ui.router'];

    var am = angular
        .module(context.app.name + '.router', modules);

    return am;
}

module.exports = function(context) {
    return {
        am: createModule(context),
        run: run,
        config: config
    };
};
