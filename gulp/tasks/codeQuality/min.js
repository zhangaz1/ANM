'use strict';


var uglify = require('gulp-uglify');

function min(context, done) {
    context.gulp
        .src(context.config.minFiles)
        .pipe(uglify())
        .pipe(context.gulp.dest(context.config.releaseDir));

    done(null);
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.min,
        'js min',
        function(done) {
            min(context, done);
        }
    );
}

module.exports = createTask;
