'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.devOnLine,
        'dev online open home and livereload',
        context.gulpSequence(
            tasks.clean,
            tasks.build,
            tasks.runAllServers,
            tasks.runAllTests,
            tasks.browserHomePage,
            tasks.watchAll
        )
    );
}

module.exports = createTask;
