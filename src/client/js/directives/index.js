'use strict';


var context = require('/config/context.js');
var dns = context.namespace.modules.directives;

function createModule() {

    var modules = [dns.controllers.name];

    var am = angular
        .module(dns.name, modules);

    require('./controllers/index.js');

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
