'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchClientJses,
        description: 'watch client jses',
        files: [
            context.config.clientJs,
            context.config.clientBuildFiles
        ],
        task: context.tasks.buildClientJses
    });
};
