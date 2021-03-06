'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.cleanClient,
        'clean client',
        context.gulpSequence(
            tasks.cleanClientBuild,
            tasks.cleanClientComponents
        )
    );
};

module.exports = createTask;
