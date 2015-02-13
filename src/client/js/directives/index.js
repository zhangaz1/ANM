'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var directives = {
        'rightClick': require('./rightClick.js'),

        'panel': require('./panel.js'),
        'tabs': require('./tabs.js'),

        'header': require('./header.js'),
        'footer': require('./footer.js')
    };

    var am = angular
        .module(context.app.name + '.directives', modules);


    context.modulesLoader(directives,
        function(directiveName) {
            am.directive(
                directiveName,
                directives[directiveName]
            );
        });

    return am;
}

module.exports = {
    am: createModule()
};
