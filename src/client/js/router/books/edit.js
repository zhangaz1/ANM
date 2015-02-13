'use strict';


var stateFactory = require('./../stateFactory.js');
var name = 'edit';

module.exports = function(treeName) {
    var state = stateFactory(treeName, name);
    state.url += '/{id}';
    return state;
};
