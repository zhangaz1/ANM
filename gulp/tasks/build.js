'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.build,
        'build', [
            tasks.buildServer,
            tasks.buildClient
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
