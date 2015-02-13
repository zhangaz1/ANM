'use strict';


var context = require('/config/context.js');
var treeName = 'base';

module.exports = function($stateProvider) {
    var states = {
        'default': require('./default.js'),
        start: require('./start.js'),
        settings: require('./settings.js'),
        'else': require('./else.js'),
        admin: require('./admin.js'),
        about: require('./about.js')
    };

    context.modulesLoader(states, function(stateName) {
        $stateProvider
            .state(states[stateName]);
    });
};
