'use strict';


var stateFactory = require('./../stateFactory.js');
var name = 'detail';

module.exports = function(treeName) {
    var state = stateFactory(treeName, name);
    state.url += '/{id}';
    return state;
};
