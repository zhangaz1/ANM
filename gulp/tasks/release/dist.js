'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.dist,
        'dist',
        context.gulpSequence(
            tasks.distServer,
            tasks.distClient,
            tasks.distBoot
        )
    );
}

module.exports = createTask;
