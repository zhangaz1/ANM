'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.default,
        'run default task',
        context.gulpSequence(
            tasks.clean,
            tasks.build,
            tasks.runAllServers,
            tasks.runAllTests,
            tasks.watchAll
        )
    );
}

module.exports = createTask;
