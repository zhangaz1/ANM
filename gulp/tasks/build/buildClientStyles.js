'use strict';


function buildClientStyles(context, done) {
    context.gulp
        .src(context.config.appStyleFile)
        .pipe(context.duo())
        .pipe(context.gulp.dest(context.config.clientBuildDir))
        .on('end', function() {
            done(null);
        });
}

function createTask(context) {
    context.gulp.task(
        context.tasks.buildClientStyles,
        'build client css',
        function(done) {
            buildClientStyles(context, done);
        }
    );
};

module.exports = createTask;
