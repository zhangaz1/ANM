'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.buildClient,
        'build client',
        context.gulpSequence(
            tasks.buildClientStyles,
            tasks.buildClientJses
        )
    );
}

module.exports = createTask;
