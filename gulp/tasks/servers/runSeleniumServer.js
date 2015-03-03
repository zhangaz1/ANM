'use strict';


var taskName;

function createTaskHandler(context) {
    return function runSeleniumServer(done) {
        var watchesCache = context.tasks.watchesCache;
        if (!watchesCache[taskName]) {
            watchesCache[taskName] = context.tools.execCmd('seleniumserver');
        }
        done(null);
    };
}

function createTask(context) {
    taskName = context.tasks.runSeleniumServer;
    context.gulp.task(
        taskName,
        'run selenium server unit tests',
        createTaskHandler(context)
    );
};

module.exports = createTask;
