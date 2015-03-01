'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchServerUnitTests,
        description: 'watch server unit tests',
        files: [
            context.config.commonJs,
            context.config.serverUnitConfig,
            context.config.serverJs,
            context.config.serverUnitTestJs
        ],
        task: context.tasks.runServerUnitTests
    });
};
