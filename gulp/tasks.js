'use strict';

var tasks = {
    'default': 'default',

    build: 'build',

    buildServer: 'buildServer',

    buildClient: 'buildClient',
    buildClientStyles: 'buildClientStyles',
    buildClientJses: 'buildClientJses',

    runAllServers: 'runAllServers',
    runWebServer: 'runWebServer',
    runSeleniumServer: 'runSeleniumServer',

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
    require('./tasks/buildServer')(context);

    require('./tasks/buildClientStyles')(context);
    require('./tasks/buildClientJses')(context);
    require('./tasks/buildClient')(context);

    require('./tasks/build')(context);

    require('./tasks/runWebServer')(context);
    require('./tasks/runSeleniumServer')(context);
    require('./tasks/runAllServers')(context);

    require('./tasks/runServerUnitTests')(context);
    require('./tasks/runKarmaClientUnitTests')(context);
    require('./tasks/runUnitTests')(context);

    require('./tasks/runKarmaClientBddTests')(context);
    require('./tasks/runProtractorClientBddTests')(context);
    require('./tasks/runBddTests')(context);

    require('./tasks/runAllTests')(context);

    require('./tasks/watchGulpSelf')(context);

    require('./tasks/watchClientTemplates')(context);
    require('./tasks/watchClientJses')(context);
    require('./tasks/watchClientStyles')(context);

    require('./tasks/watchServerUnitTests')(context);
    require('./tasks/watchKarmaClientUnitTests')(context);
    require('./tasks/watchKarmaClientBddTests')(context);
    require('./tasks/watchProtractorClientBddTests')(context);
    require('./tasks/watchAll')(context);

    require('./tasks/runLiveReloadServer')(context);
    require('./tasks/browserHomePage')(context);
    require('./tasks/devOnLine')(context);

    require('./tasks/defaultTask')(context);
}

function createTasks(context) {
    context.tasks = tasks;
    addTasks(context);
}

module.exports = {
    createTasks: createTasks
};
