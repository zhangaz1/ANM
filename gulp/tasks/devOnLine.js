'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.devOnLine,
        'dev online open home and livereload', [
            tasks.build,

            tasks.runAllTests,

            tasks.runWebServer,
            tasks.runLiveReloadServer,
            tasks.browserHomePage,

            tasks.watchAll
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
