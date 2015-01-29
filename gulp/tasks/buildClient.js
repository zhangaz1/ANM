'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.buildClient,
        'build client', [
            tasks.buildClientStyles,
            tasks.buildClientJses
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
