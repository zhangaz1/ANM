'use strict';


var context = require('/config/context.js');
var sns = context.namespace.modules.services;

context
    .angular
    .module(sns.name)
    .factory(sns.factory.name, function() {
        var thisIsPrivate = "Private";

        function getPrivate() {
            return thisIsPrivate;
        }

        return {
            variable: "This is public",
            getPrivate: getPrivate
        };
    });
