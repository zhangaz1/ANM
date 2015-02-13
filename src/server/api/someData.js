'use strict';

module.exports = function(appContext) {
    appContext.app.use(appContext.route.get('/someData/:id', someData));
};

function* someData(id) {
    this.body = {
        data: 'dataValue'
    };
    return;
}
