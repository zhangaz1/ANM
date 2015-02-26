'use strict';

var duo = require('./../libs/duo');

var map = require('map-stream');

function buildClientJses(context, done) {
    try {
        context.gulp
            .src(context.config.clientAppJsFile)
            .pipe(duo())
            .pipe(context.gulp.dest(context.config.clientBuildDir));
    } catch (ex) {
        console.log(ex);
    }

    done(null);
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
