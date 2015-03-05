'use strict';


var clean = require('gulp-clean');
var del = require('del');

function cleanDist(context, done) {
    context.gulp
        .src(context.config.releaseDir)
        .pipe(clean());

    done(null);
}

function createTask(context) {
    context.gulp.task(
        context.tasks.cleanDist,
        'clean dist',
        function(done) {
            // cleanDist(context, done);
            del(context.config.releaseDir, done);
        }
    );
};

module.exports = createTask;
