'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runAllServers,
        'run all servers(webServer and seleniumServer)', [
            tasks.runRedisServer,
            tasks.runMongoDBServer,
            tasks.runWebServer,
            tasks.runSeleniumServer,
            tasks.runLiveReloadServer
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
