'use strict';


module.exports = {
    layout: {
        breadcrumb: require('./layout/breadcrumb.html'),
        default: require('./layout/default.html')
    },
    base: {
        about: require('./base/about.html'),
        admin: require('./base/admin.html'),
        'default': require('./base/default.html'),
        'else': require('./base/else.html'),
        settings: require('./base/settings.html'),
        start: require('./base/start.html')
    },
    books: {
        'default': require('./books/default.html'),
        detail: require('./books/detail.html'),
        edit: require('./books/edit.html'),
        list: require('./books/list.html')
    },
    images: {
        'default': require('./images/default.html'),
        detail: require('./images/detail.html'),
        edit: require('./images/edit.html'),
        list: require('./images/list.html')
    },
    directives: {
        panel: require('./directives/panel.html'),
        tabs: require('./directives/tabs.html'),
        footer: require('./directives/footer.html'),
        header: require('./directives/header.html')
    }
};
