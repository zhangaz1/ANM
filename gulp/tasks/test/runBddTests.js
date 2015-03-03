'use strict';


function createTask(context) {
    var tasks = context.tasks;
    context.gulp.task(
        tasks.runBddTests,
        'run bdd tests',
        context.gulpSequence(
            tasks.runKarmaClientBddTests,
            tasks.runProtractorClientBddTests
        )
    );
}

module.exports = createTask;
