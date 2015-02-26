'use strict';


var context = require('/config/context.js');
var _else = context.namespace.modules.router.base.else;

module.exports = {
    name: _else.name,
    url: _else.url,
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
