'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var services = {
        'constant': require('./constant.js'),
        'value': require('./value.js'),
        'factory': require('./factory.js')
    };

    var am = angular
        .module(context.app.name + '.services', modules);

    context.modulesLoader(services,
        function(serviceName) {
            services[serviceName](am);
        });

    return am;
}

module.exports = {
    am: createModule()
};
