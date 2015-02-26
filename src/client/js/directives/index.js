'use strict';


var context = require('/config/context.js');

function createModule() {

    var controllers = require('./controllers/index.js');
    var modules = [controllers.am.name];


    var am = angular
        .module(context.namespace.modules.directives.name, modules);


    require('./rightClick.js');

    require('./panel.js');
    require('./tabs.js');

    require('./header.js');
    require('./footer.js');


    return am;
}

module.exports = {
    am: createModule()
};
