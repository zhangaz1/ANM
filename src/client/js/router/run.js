'use strict';


module.exports = [
    '$rootScope', '$state', '$stateParams', '$urlRouter',
    function($rootScope, $state, $stateParams, $urlRouter) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.name == 'else' && toParams.type != 'header') {
                    alert('must be header');
                    event.preventDefault();
                }
            });

        $rootScope.$on('$stateNotFound',
            function(event, unfoundState, fromState, fromParams) {
                alert('state(' + unfoundState.to + ') not found!');
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            });

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                console.log('change state from ' + fromState.name + ' to ' + toState.name + ' success!');
            });

        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                console.log('change state from ' + fromState.name + ' to ' + toState.name + ' error(' + error + ')!');
            });

        $rootScope.$on('$viewContentLoading',
            function(event, viewConfig) {
                // Access to all the view config properties.
                // and one special property 'targetView'
                // viewConfig.targetView 
                console.log('$viewContentLoading(rootScope): ', viewConfig);
            });

        $rootScope.$on('$viewContentLoaded',
            function(event, viewConfig) {
                // Access to all the view config properties.
                // and one special property 'targetView'
                // viewConfig.targetView 
                console.log('$viewContentLoaded(rootScope): ', viewConfig);
            });

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
