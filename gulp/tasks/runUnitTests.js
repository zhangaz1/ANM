'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runUnitTests,
        'run unit tests', [
            tasks.runServerUnitTests,
            tasks.runKarmaClientUnitTests
        ],
        function(done) {
            done(null);
        });
};

module.exports = createTask;
