'use strict';


function createTask(context) {
    context.gulp.task(
        context.tasks.buildServer,
        'build server'
    );
};

module.exports = createTask;
