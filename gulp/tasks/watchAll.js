'use strict';

function createTask(context) {
    var tasks = context.tasks;
    context.gulp.task(
        tasks.watchAll,
        'watch all', [
            tasks.watchClientStyles,
            tasks.watchClientJses,
            tasks.watchGulpSelf,
            tasks.watchServerUnitTests,
            tasks.watchKarmaClientUnitTests,
            tasks.watchKarmaClientBddTests,
            tasks.watchProtractorClientBddTests
        ],
        function(done) {
            done(null);
        });
}

module.exports = createTask;
