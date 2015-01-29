var exec = require('child_process').exec;

function execCmd(cmd) {
    return exec('start ' + cmd, function(err, stdout, stderr) {
        if (err) {
            console.log(stdout, stderr);
        } else {
            console.log(stdout);
        }
    });
}

module.exports = execCmd;
