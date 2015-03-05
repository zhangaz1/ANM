'use strict';


function dist(context, done) {
    context.gulp
        .src(context.config.bootFiles)
        .pipe(context.gulp.dest(context.config.releaseDir));

    done(null);
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.distBoot,
        'dist Boot',
        function(done) {
            dist(context, done);
        }
    );
}

module.exports = createTask;
