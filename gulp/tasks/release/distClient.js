'use strict';


function dist(context, done) {
    context.gulp
        .src(context.config.clientFiles)
        .pipe(context.gulp.dest(context.config.clientReleaseDir));

    done(null);
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.distClient,
        'dist Client',
        function(done) {
            dist(context, done);
        }
    );
}

module.exports = createTask;
