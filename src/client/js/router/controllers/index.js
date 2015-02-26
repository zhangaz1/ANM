'use strict';


var context = require('/config/context.js');

var moduleName = context.app.name + '.router.controllers';

function createModule() {
    var modules = [];

    var cms = {
        'base': require('./base/index.js')(moduleName) // ,
            // books: require('./books/index.js')
    };

    context
        ._
        .keysIn(cms)
        .forEach(function(cmName) {
            modules.push(cms[cmName].am.name);
        });

    var am = angular
        .module(moduleName, modules);

    return am;
}

module.exports = {
    am: createModule()
};
