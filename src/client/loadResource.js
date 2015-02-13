(function() {

    var loadCsses = function(bc, min) {
        var links = {
            true: [
                'bootstrap/dist/css/bootstrap.min.css',
                'bootstrap/dist/css/bootstrap-theme.min.css'
            ],
            false: [
                'bootstrap/dist/css/bootstrap.css',
                'bootstrap/dist/css/bootstrap-theme.css'
            ]
        };

        var useLinks = links[min];
        for (var li in useLinks) {
            document.write('<link rel="stylesheet" href="' + bc + useLinks[li] + '" />');
        }
    };

    var loadJses = function(bc, min) {
        var scripts = {
            true: [
                'lodash/lodash.min.js',
                'jquery/dist/jquery.min.js',
                'bootstrap/dist/js/bootstrap.min.js',
                'angular/angular.min.js',
                'angular-ui-router/release/angular-ui-router.min.js'
            ],
            false: [
                'lodash/lodash.js',
                'jquery/dist/jquery.js',
                'bootstrap/dist/js/bootstrap.js',
                'angular/angular.js',
                'angular-ui-router/release/angular-ui-router.js'
            ]
        };

        var useScripts = scripts[min];
        for (var li in useScripts) {
            document.write('<script type="text/javascript" language="javascript" src="' + bc + useScripts[li] + '"></script>');
        }
    };


    var min = false;
    var bc = './bower_components/';
    loadCsses(bc, min);
    loadJses(bc, min);

})();
