'use strict';


var stateFactory = require('./../stateFactory.js');
var name = 'list';

module.exports = function(treeName) {
    return stateFactory(treeName, name);
};
