'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.build,
        'build',
        context.gulpSequence(
            tasks.buildServer,
            tasks.buildClient
        )
    );
}

module.exports = createTask;
