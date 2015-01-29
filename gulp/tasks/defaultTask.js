'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.default,
        'run default task', [
            tasks.runAllServers,
            tasks.runAllTests,
            tasks.watchAll
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
