'use strict';


var taskName;

function createTaskHandler(context) {
    return function runMongoDBServer(done) {
        var watchesCache = context.tasks.watchesCache;
        if (!watchesCache[taskName]) {
            watchesCache[taskName] = context.tools.execCmd('mongodcmd');
        }
        done(null);
    };
}

function createTask(context) {
    taskName = context.tasks.runMongoDBServer;
    context.gulp.task(
        taskName,
        'run MongoDB server unit tests',
        createTaskHandler(context)
    );
};

module.exports = createTask;
