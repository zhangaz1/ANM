'use strict';


var clean = require('gulp-clean');
var del = require('del');

function cleanClientComponents(context, done) {
    context.gulp
        .src(context.config.clientComponentsDir)
        .pipe(clean({
            force: true
        }));

    done(null);
}

function createTask(context) {
    context.gulp.task(
        context.tasks.cleanClientComponents,
        'clean client Components',
        function(done) {
            // cleanClientComponents(context, done);
            del(context.config.clientComponentsDir, done);
        }
    );
};

module.exports = createTask;
