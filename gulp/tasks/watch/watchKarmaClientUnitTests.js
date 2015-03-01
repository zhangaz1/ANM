'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchKarmaClientUnitTests,
        description: 'watch karma client unit tests',
        files: [
            context.config.karmaClientUnitConfig,
            context.config.clientJs,
            context.config.karmaClientUnitTestJs
        ],
        task: context.tasks.runKarmaClientUnitTests
    });
};
