'use strict';

module.exports = function(context) {
    require('./watchTask')({
        gulp: context.gulp,
        watchesCache: context.tasks.watchesCache,
        taskName: context.tasks.watchClientTemplates,
        description: 'watch client templates',
        files: [
            context.config.clientTemplates
        ],
        task: context.tasks.buildClientJses
    });
};
