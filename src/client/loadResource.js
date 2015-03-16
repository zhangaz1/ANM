(function() {

	var loadCsses = function(bc, min) {
		var links = [
			'bootstrap/dist/css/bootstrap',
			'bootstrap/dist/css/bootstrap-theme'
		];

		for (var li in links) {
			document.write('<link rel="stylesheet" href="/' + bc + links[li] + min + '.css" />');
		}
	};

	var loadJses = function(bc, min) {
		var scripts = [];
		var baseScripts = [
			'lodash/lodash',
			'jquery/dist/jquery',
			'bootstrap/dist/js/bootstrap',
			'angular/angular',
			'angular-ui-router/release/angular-ui-router'
		];

		var li;
		for (li in baseScripts) {
			scripts.push(bc + baseScripts[li] + min + '.js');
		}

		scripts.push(bc + (min ? 'sprintf/dist/sprintf.min.js' : 'sprintf/src/sprintf.js'));

		for (li in scripts) {
			document.write('<script type="text/javascript" language="javascript" src="/' + scripts[li] + '"></script>');
		}
	};


	var min = '';
	var bc = './bower_components/';
	loadCsses(bc, min);
	loadJses(bc, min);

})();