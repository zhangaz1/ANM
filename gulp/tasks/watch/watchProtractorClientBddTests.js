'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchProtractorClientBddTests,
        description: 'watch protractor client bdd tests',
        files: [
            context.config.protractorClientE2eConfig,
            context.config.clientJs,
            context.config.clientHtml,
            context.config.clientCss,
            context.config.protractorClientBddTestJs
        ],
        task: context.tasks.runProtractorClientBddTests
    });
};
