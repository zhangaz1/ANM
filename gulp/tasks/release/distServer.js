'use strict';


function dist(context, done) {
    context.gulp
        .src(context.config.serverFiles)
        .pipe(context.gulp.dest(context.config.releaseDir));

    done(null);
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.distServer,
        'dist Server',
        function(done) {
            dist(context, done);
        }
    );
}

module.exports = createTask;
