'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runAllTests,
        'run all tests(unit&bdd)',
        context.gulpSequence(
            tasks.runUnitTests,
            tasks.runBddTests
        )
    );
}

module.exports = createTask;
