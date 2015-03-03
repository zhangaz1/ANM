'use strict';


function createTask(context) {
    var tasks = context.tasks;
    context.gulp.task(
        tasks.watchAll,
        'watch all',
        context.gulpSequence(
            tasks.watchClientStyles,
            tasks.watchClientJses,
            tasks.watchClientTemplates,
            tasks.watchGulpSelf,
            tasks.watchServerUnitTests,
            tasks.watchKarmaClientUnitTests,
            tasks.watchKarmaClientBddTests,
            tasks.watchProtractorClientBddTests
        )
    );
}

module.exports = createTask;
