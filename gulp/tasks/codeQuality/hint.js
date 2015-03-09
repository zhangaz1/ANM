'use strict';


var jshint = require('gulp-jshint');

function hint(context, done) {
    context.gulp
        .src(context.config.clientFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

    done(null);
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.hint,
        'js hint',
        function(done) {
            hint(context, done);
        }
    );
}

module.exports = createTask;
