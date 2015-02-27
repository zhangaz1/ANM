'use strict';


var context = require('/config/context.js');

(function(context) {
    context.modulesLoader = require('/js/common/modulesLoader.js');
    context.namespace = {
        modules: require('/config/namespace/modules/index.js')
    };
})(context);


require('./js/main.js');

window.myApp = {
    context: context,
    am: context.angular.module(context.app.name)
};
