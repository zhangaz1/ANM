'use strict';


var context = require('/config/context.js');

module.exports = function(modules, loader) {
    context._
        .keysIn(modules)
        .forEach(loader);
};
