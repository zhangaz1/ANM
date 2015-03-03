'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.clean,
        'clean',
        context.gulpSequence(
            tasks.cleanClient
        )
    );
}

module.exports = createTask;
