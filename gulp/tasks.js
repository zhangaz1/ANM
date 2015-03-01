'use strict';

var tasks = {
    'default': 'default',

    build: 'build',

    buildServer: 'buildServer',

    buildClient: 'buildClient',
    buildClientStyles: 'buildClientStyles',
    buildClientJses: 'buildClientJses',

    clean: 'clean',

    cleanClient: 'cleanClient',
    cleanClientBuild: 'cleanClientBuild',
    cleanClientComponents: 'cleanClientComponents',

    runAllServers: 'runAllServers',
    runWebServer: 'runWebServer',
    runSeleniumServer: 'runSeleniumServer',
    runMongoDBServer: 'runMongoDBServer',
    runRedisServer: 'runRedisServer',

    runAllTests: 'runAllTests',
    runUnitTests: 'runUnitTests',
    runServerUnitTests: 'runServerUnitTests',
    runKarmaClientUnitTests: 'runKarmaClientUnitTests',
    runBddTests: 'runBddTests',
    runKarmaClientBddTests: 'runKarmaClientBddTests',
    runProtractorClientBddTests: 'runProtractorClientBddTests',

    watchAll: 'watchAll',

    watchGulpSelf: 'watchGulpSelf',

    watchClientStyles: 'watchClientStyles',
    watchClientJses: 'watchClientJses',
    watchClientTemplates: 'watchClientTemplates',

    watchServerUnitTests: 'watchServerUnitTests',
    watchKarmaClientUnitTests: 'watchKarmaClientUnitTests',
    watchKarmaClientBddTests: 'watchKarmaClientBddTests',
    watchProtractorClientBddTests: 'watchProtractorClientBddTests',

    devOnLine: 'devOnLine',
    runLiveReloadServer: 'runLiveReloadServer',
    browserHomePage: 'browserHomePage',

    watchesCache: {}
};

function addTasks(context) {

    require('./tasks/clean/cleanClientBuild.js')(context);
    require('./tasks/clean/cleanClientComponents.js')(context);
    require('./tasks/clean/cleanClient.js')(context);

    require('./tasks/clean/cleanAll.js')(context);


    require('./tasks/build/buildServer.js')(context);

    require('./tasks/build/buildClientStyles.js')(context);
    require('./tasks/build/buildClientJses.js')(context);
    require('./tasks/build/buildClient.js')(context);

    require('./tasks/build/buildAll.js')(context);

    require('./tasks/servers/runMongoDBServer.js')(context);
    require('./tasks/servers/runRedisServer.js')(context);
    require('./tasks/servers/runWebServer.js')(context);
    require('./tasks/servers/runSeleniumServer.js')(context);
    require('./tasks/servers/runAllServers.js')(context);

    require('./tasks/test/runServerUnitTests.js')(context);
    require('./tasks/test/runKarmaClientUnitTests.js')(context);
    require('./tasks/test/runUnitTests.js')(context);

    require('./tasks/test/runKarmaClientBddTests.js')(context);
    require('./tasks/test/runProtractorClientBddTests.js')(context);
    require('./tasks/test/runBddTests.js')(context);

    require('./tasks/test/runAllTests.js')(context);

    require('./tasks/watch/watchGulpSelf.js')(context);

    require('./tasks/watch/watchClientTemplates.js')(context);
    require('./tasks/watch/watchClientJses.js')(context);
    require('./tasks/watch/watchClientStyles.js')(context);

    require('./tasks/watch/watchServerUnitTests.js')(context);
    require('./tasks/watch/watchKarmaClientUnitTests.js')(context);
    require('./tasks/watch/watchKarmaClientBddTests.js')(context);
    require('./tasks/watch/watchProtractorClientBddTests.js')(context);
    require('./tasks/watch/watchAll.js')(context);

    require('./tasks/dev/runLiveReloadServer.js')(context);
    require('./tasks/dev/browserHomePage.js')(context);
    require('./tasks/dev/devOnLine.js')(context);

    require('./tasks/defaultTask.js')(context);
}

function createTasks(context) {
    context.tasks = tasks;
    addTasks(context);
}

module.exports = {
    createTasks: createTasks
};
