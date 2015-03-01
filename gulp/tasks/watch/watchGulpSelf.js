'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchGulpSelf,
        description: 'watch gulp self',
        files: [
            context.config.gulpFile,
            context.config.gulpFiles
        ],
        task: context.tasks.default
    });
};
