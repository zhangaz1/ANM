'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services;

context
    .angular
    .module(sns.name)
    .value(sns.value.name, {
        config1: true,
        config2: "Default config2 but it can changes"
    });
