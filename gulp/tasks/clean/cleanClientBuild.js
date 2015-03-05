'use strict';


var clean = require('gulp-clean');
var del = require('del');

function cleanClientBuild(context, done) {
    context.gulp
        .src(context.config.clientBuildDir)
        .pipe(clean({
            force: true
        }));

    done(null);
}

function createTask(context) {
    context.gulp.task(
        context.tasks.cleanClientBuild,
        'clean client build',
        function(done) {
            // cleanClientBuild(context, done);
            del(context.config.clientBuildDir, done);
        }
    );
};

module.exports = createTask;
