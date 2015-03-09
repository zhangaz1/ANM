'use strict';


var context = require('/config/context.js');
var appName = context.app.name;

var router = {
    router: require('./router/index.js'), // require('./router.js'),
    services: require('./services.js'),
    directives: require('./directives.js'),
    controllers: require('./controllers.js')
};

module.exports = router;
