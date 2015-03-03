'use strict';


module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchKarmaClientBddTests,
        description: 'watch karma client bdd tests',
        files: [
            context.config.karmaClientE2eConfig,
            context.config.clientJs,
            context.config.clientHtml,
            context.config.clientCss,
            context.config.karmaClientBddTestJs
        ],
        task: context.tasks.runKarmaClientBddTests
    });
};
