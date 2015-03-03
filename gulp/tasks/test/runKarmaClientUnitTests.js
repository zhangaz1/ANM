'use strict';


var karma = require('karma').server;

function runKarmaClientUnitTests(context, done) {
    karma.start({
        configFile: context.config.karmaClientUnitConfig
    }, function(exitCode) {
        console.log('Karma run has exited with ' + exitCode);
        done(null);
        // process.exit(exitCode);
    });
}

function createTask(context) {
    context.gulp.task(
        context.tasks.runKarmaClientUnitTests,
        'run unit tests',
        function(done) {
            runKarmaClientUnitTests(context, done);
        }
    );
}

module.exports = createTask;
