'use strict';

var Duo = require('duo');
var map = require('map-stream');

function buildFile(file, fn) {
    Duo(file.base)
        .entry(file.path)
        .run(function(err, src) {
            if (err) {
                fn(err);
            } else {
                file.contents = new Buffer(src);
                fn(null, file);
            }
        });
}

function duo(opts) {
    opts = opts || {};

    return map(buildFile);
}

module.exports = duo;
