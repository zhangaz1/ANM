'use strict';


var context = require('/config/context.js');

(function(context) {
    context.modulesLoader = require('/js/common/modulesLoader.js');
    context.namespace = {
        modules: require('/config/namespace/modules/index.js')
    };
})(context);


var myApp =
    window.myApp = require('./js/main.js');
myApp.context = context;
