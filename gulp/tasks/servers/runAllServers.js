'use strict';


function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runAllServers,
        'run all servers(webServer and seleniumServer)',
        context.gulpSequence(
            tasks.runRedisServer,
            tasks.runMongoDBServer,
            tasks.runWebServer,
            tasks.runSeleniumServer,
            tasks.runLiveReloadServer
        )
    );
}

module.exports = createTask;
