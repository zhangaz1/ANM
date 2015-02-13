(function() {

    var loadCsses = function(bc, min) {
        var links = [
            'bootstrap/dist/css/bootstrap',
            'bootstrap/dist/css/bootstrap-theme'
        ];

        for (var li in links) {
            document.write('<link rel="stylesheet" href="' + bc + links[li] + min + '.css" />');
        }
    };

    var loadJses = function(bc, min) {
        var scripts = [
            'lodash/lodash',
            'jquery/dist/jquery',
            'bootstrap/dist/js/bootstrap',
            'angular/angular',
            'angular-ui-router/release/angular-ui-router'
        ];

        for (var li in scripts) {
            document.write('<script type="text/javascript" language="javascript" src="' + bc + scripts[li] + min + '.js"></script>');
        }
    };


    var min = '';
    var bc = './bower_components/';
    loadCsses(bc, min);
    loadJses(bc, min);

})();
