'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.clean,
        'clean', [
            tasks.cleanClient
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
