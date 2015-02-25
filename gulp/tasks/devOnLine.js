'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.devOnLine,
        'dev online open home and livereload', [
            tasks.build,

            tasks.runAllServers,
            tasks.runAllTests,

            tasks.browserHomePage,

            tasks.watchAll
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
