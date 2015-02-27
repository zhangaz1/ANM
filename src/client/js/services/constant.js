'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services;

context
    .angular
    .module(sns.name)
    .constant(sns.constant.name, {
        config1: true,
        config2: "Default config2"
    });
