'use strict';


function createTask(option) {
    var taskName = option.taskName;
    var gulp = option.gulp;

    return function(done) {
        var watchesCache = option.watchesCache;
        // console.log('%s\r\n %s,\r\n %s\r\n', taskName, watchesCache[taskName], option.files);
        if (!watchesCache[taskName]) {
            gulp.watch(option.files,
                function() {
                    gulp.start(option.task);
                });
            watchesCache[taskName] = true;
        }
        done(null);
    };
}

module.exports = function(option) {
    var taskName = option.taskName;
    var gulp = option.gulp;

    gulp.task(
        taskName,
        option.description,
        createTask(option)
    );
};
