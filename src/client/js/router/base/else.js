'use strict';


var context = require('/config/context.js');

module.exports = {
    name: 'else',
    url: '/else/:type',
    templateProvider: function($timeout, $stateParams) {
        return $timeout(function() {
            return context.templates.base['else'];
        }, 2000);
    },
    controllerProvider: function($stateParams) {
        var controllerName = $stateParams.type + 'Controller';
        return controllerName;
    }
};
