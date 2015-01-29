'use strict';

var context = require('./config/context.js');


context._ = require('./bower_components/lodash/lodash.js');

context.$ =
    context.jQuery =
    window.$ =
    window.jQuery = require('./bower_components/jquery/dist/jquery.js');

require('./bower_components/bootstrap/dist/js/bootstrap.js');

require('./bower_components/angular/angular.js');
context.angular = angular;


require('./js/main.js')(context);
