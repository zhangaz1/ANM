'use strict';


var gulp = require('gulp-help')(require('gulp'));
var gulpSequence = require('gulp-sequence').use(gulp);

var gulpContext = {
    // tasks: tasks,
    gulp: gulp,
    gulpSequence: gulpSequence,
    duo: require('./gulp/libs/duo.js'),
    config: require('./gulp/config'),
    tools: {
        execCmd: require('./common/cmd/execCmd.js')
    }
};

require('./gulp/tasks')
    .createTasks(gulpContext);
