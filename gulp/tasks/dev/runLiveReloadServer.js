'use strict';

var taskName;

function runLiveReloadServer(context) {
    return function(done) {
        var watchesCache = context.tasks.watchesCache;
        if (!watchesCache[taskName]) {
            var livereload = require('livereload');
            var server = livereload.createServer();
            server.watch(context.config.src);
            watchesCache[taskName] = server;
        }
        done(null);
    };
}

function createTask(context) {
    taskName = context.tasks.runLiveReloadServer;
    context.gulp.task(
        taskName,
        'run livereload server',
        runLiveReloadServer(context)
    );
};

module.exports = createTask;
