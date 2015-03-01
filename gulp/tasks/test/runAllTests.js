'use strict';

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.runAllTests,
        'run all tests(unit&bdd)', [
            tasks.runUnitTests,
            tasks.runBddTests
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
