'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runAllServers,
        'run all servers(webServer and seleniumServer)', [
            tasks.runWebServer,
            tasks.runSeleniumServer
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
