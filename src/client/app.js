'use strict';


var context = require('/config/context.js');

(function(context) {
    context.modulesLoader = require('/js/common/modulesLoader.js');
})(context);


var myApp = require('./js/main.js');
