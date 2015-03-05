'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.release,
        'release',
        context.gulpSequence(
            tasks.cleanDist,
            tasks.build,
            tasks.dist
        )
    );
}

module.exports = createTask;
