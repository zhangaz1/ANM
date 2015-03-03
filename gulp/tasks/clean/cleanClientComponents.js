'use strict';


var del = require('del');

function createTask(context) {
    context.gulp.task(
        context.tasks.cleanClientComponents,
        'clean client Components',
        function(done) {
            del(context.config.clientComponentsDir, done);
        }
    );
};

module.exports = createTask;
