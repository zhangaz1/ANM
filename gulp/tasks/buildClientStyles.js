'use strict';

var duo = require('./../libs/duo');

var map = require('map-stream');

function buildClientStyles(context, done) {
    context.gulp
        .src(context.config.appStyleFile)
        .pipe(duo())
        .pipe(context.gulp.dest(context.config.clientBuildDir));

    done(null);
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
