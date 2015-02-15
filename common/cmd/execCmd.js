'use strict';


var exec = require('child_process').exec;

module.exports = function execCmd(cmd) {
    return exec('start ' + cmd, function(err, stdout, stderr) {
        if (err) {
            console.log(stdout, stderr);
        } else {
            console.log(stdout);
        }
    });
};
