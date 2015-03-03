'use strict';


function runServerUnitTests(done) {
    console.log('run server unit tests');
    done(null);
}

function createTask(context) {
    context.gulp.task(
        context.tasks.runServerUnitTests,
        'run server unit tests',
        runServerUnitTests
    );
};

module.exports = createTask;
