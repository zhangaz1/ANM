'use strict';


var context = require('/config/context.js');

function createModule() {
    var modules = [];

    var cms = {
        'base': require('./base/index.js') // ,
            // books: require('./books/index.js')
    };

    context
        ._
        .keysIn(cms)
        .forEach(function(cmName) {
            modules.push(cms[cmName].am.name);
        });

    var am = angular
        .module(context.app.name + '.router.controllers', modules);

    return am;
}

module.exports = {
    am: createModule()
};
