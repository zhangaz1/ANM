'use strict';


var taskName;

function createTaskHandler(context) {
    return function runRedisServer(done) {
        var watchesCache = context.tasks.watchesCache;
        if (!watchesCache[taskName]) {
            watchesCache[taskName] = context.tools.execCmd('redis-server');
        }
        done(null);
    };
}

function createTask(context) {
    taskName = context.tasks.runRedisServer;
    context.gulp.task(
        taskName,
        'run Redis server unit tests',
        createTaskHandler(context)
    );
};

module.exports = createTask;
