var gulp = require('gulp');
require('gulp-help')(gulp);


var gulpContext = {
    // tasks: tasks,
    gulp: gulp,
    config: require('./gulp/config')
};

require('./gulp/tasks')
    .createTasks(gulpContext);
