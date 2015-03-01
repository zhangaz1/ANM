'use strict';

var gp = require('gulp-protractor');

function runProtractorClientBddTests(context, done) {
    context.gulp.src(['test/client/bdd/protractor/**/*.js'], {
            read: false
        })
        .pipe(gp.protractor({
            configFile: context.config.protractorClientE2eConfig,
            args: ['--baseUrl', 'http://localhost:3000']
        })).on('error', function(e) {
            console.log(e);
            done(null);
        }).on('end', function() {
            done(null);
        });
}

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runProtractorClientBddTests,
        'run karm client bdd tests', [
            tasks.runWebServer,
            tasks.runSeleniumServer
        ],
        function(done) {
            runProtractorClientBddTests(context, done);
        }
    );
};

module.exports = createTask;
