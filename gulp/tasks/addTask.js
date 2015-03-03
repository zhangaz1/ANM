'use strict';


function addTask(context) {
    return function(name, description, taskFn) {
        context.gulp.task(
            name,
            description,
            taskFn
        );
    };
}

module.exports = addTask;
