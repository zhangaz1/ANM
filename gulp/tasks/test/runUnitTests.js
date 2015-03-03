'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runUnitTests,
        'run unit tests',
        context.gulpSequence(
            tasks.runServerUnitTests,
            tasks.runKarmaClientUnitTests
        )
    );
};

module.exports = createTask;
