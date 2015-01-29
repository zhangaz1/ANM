'use strict';

function createTask(context) {
    var tasks = context.tasks;
    context.gulp.task(
        tasks.runBddTests,
        'run bdd tests', [
            tasks.runKarmaClientBddTests,
            tasks.runProtractorClientBddTests
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
