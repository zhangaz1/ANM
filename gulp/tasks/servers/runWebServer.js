'use strict';


var pathHelper = require('path-helper')(__dirname);
var serverBoot = pathHelper.resolve('./../../../src/boot');


var httpServer;

function runWebByExecCmd(context) {
    if (!httpServer) {
        var cmd = 'gnodemon ' + serverBoot;
        httpServer = context.tools.execCmd(cmd);
    }
}

function runWebInCurrentProcess() {
    require(serverBoot);
}

function runWebServer(context, done) {
    var taskName = context.tasks.runWebServer;
    var watchesCache = context.tasks.watchesCache;
    if (!watchesCache[taskName]) {
        switch (context.config.runWebBy) {
            case 'cmd':
                runWebByExecCmd(context);
                break;
            case 'in':
            default:
                runWebInCurrentProcess();
                break;
        }
        watchesCache[taskName] = true;
    }
    done(null);
}

function createTask(context) {
    context.gulp.task(
        context.tasks.runWebServer,
        'start web server',
        function(done) {
            runWebServer(context, done);
        }
    );
}

module.exports = createTask;
