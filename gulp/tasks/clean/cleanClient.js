'use strict';

var del = require('del');

function createTask(context) {
    var tasks = context.tasks;

    context.gulp.task(
        tasks.cleanClient,
        'clean client', [
            tasks.cleanClientBuild,
            tasks.cleanClientComponents
        ],
        function(done) {
            done(null);
        }
    );
};

module.exports = createTask;
