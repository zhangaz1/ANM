'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.devOnLine,
        'dev online open home and livereload', [
            tasks.build,
            tasks.runWebServer,
            tasks.runLiveReloadServer,
            tasks.browserHomePage,

            tasks.watchClientStyles,
            tasks.watchClientJses
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
