'use strict';

var del = require('del');

function createTask(context) {
    context.gulp.task(
        context.tasks.cleanClientBuild,
        'clean client build',
        function(done) {
            del(context.config.clientBuildDir, done);
        }
    );
};

module.exports = createTask;
