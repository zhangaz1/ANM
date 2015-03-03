'use strict';


var taskName;
const launch = require('chrome-launch');

function browserHomePage(context) {
    return function(done) {
        var watchesCache = context.tasks.watchesCache;
        if (!watchesCache[taskName]) {
            watchesCache[taskName] = context.tools.execCmd('chrome.exe ' + context.config.homePage);
        }
        done(null);
    };
}

function createTask(context) {
    taskName = context.tasks.browserHomePage;
    context.gulp.task(
        taskName,
        'run livereload server',
        browserHomePage(context)
    );
};

module.exports = createTask;
