'use strict';

var karma = require('karma').server;

function runKarmaClientBddTests(context, done) {
    karma.start({
        configFile: context.config.karmaClientE2eConfig
    }, function(exitCode) {
        console.log('Karma run has exited with ' + exitCode);
        done(null);
        // process.exit(exitCode);
    });
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runKarmaClientBddTests,
        'run karm client bdd tests', [tasks.runWebServer],
        function(done) {
            runKarmaClientBddTests(context, done);
        }
    );
};

module.exports = createTask;
