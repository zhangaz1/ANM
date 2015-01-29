'use strict';

function createTask(context) {
    context.gulp.task(
        context.tasks.buildServer,
        'build server',
        function(done) {
            done(null);
        }
    );
};

module.exports = createTask;
