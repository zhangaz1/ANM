'use strict';


function buildClientJses(context, done) {
    try {
        context.gulp
            .src(context.config.clientAppJsFile)
            .pipe(context.duo())
            .pipe(context.gulp.dest(context.config.clientBuildDir))
            .on('end', function() {
                done(null);
            });
    } catch (ex) {
        console.log(ex);
        done(null);
    }
}

function createTask(context) {
    context.gulp.task(
        context.tasks.buildClientJses,
        'build client js',
        function(done) {
            buildClientJses(context, done);
        }
    );
};

module.exports = createTask;
