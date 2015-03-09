'use strict';


var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

function min(context, done) {
	context.gulp
		.src(context.config.minFiles)
		.pipe(uglify())
		.pipe(rename(function(path) {
			path.extname = ".min" + path.extname;
		}))
		.pipe(context.gulp.dest(context.config.clientReleaseDir));

	done(null);
}

function createTask(context) {
	var tasks = context.tasks;

	context.gulp.task(
		tasks.min,
		'js min',
		function(done) {
			min(context, done);
		}
	);
}

module.exports = createTask;