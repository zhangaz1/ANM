'use strict';


var context = require('/config/context.js');

module.exports = function($stateProvider) {
    var states = {
        'default': require('./default.js'),
        'list': require('./list.js'),
        'detail': require('./detail.js'),
        'edit': require('./edit.js')
    };

    context.modulesLoader(states,
        function(stateName) {
            $stateProvider
                .state(states[stateName]);
        });
};
