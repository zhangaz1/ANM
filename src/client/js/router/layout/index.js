'use strict';


var context = require('/config/context.js');

module.exports = function($stateProvider) {
    var states = {
        'default': require('./default.js')
    };

    context.modulesLoader(states,
        function(stateName) {
            $stateProvider
                .state(states[stateName]);
        });
};
