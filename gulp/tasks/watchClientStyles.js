'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchClientStyles,
        description: 'watch client css',
        files: [
            context.config.clientCss,
            context.config.clientBuildFiles
        ],
        task: context.tasks.buildClientStyles
    });
};
