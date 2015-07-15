(function () {

	var loadCsses = function (bc, min) {
		var links = [];
		var baseLinks = [
			'bootstrap/dist/css/bootstrap',
			'bootstrap/dist/css/bootstrap-theme'
		];


		for (var li in baseLinks) {
			links.push(baseLinks[li] + min + '.css');
		}

		// links.push('bootstrap/dist/fonts');

		for (var li in links) {
			document.write('<link rel="stylesheet" href="' + bc + links[li] + '" />');
		}
	};

	var loadJses = function (bc, min) {
		var scripts = [];
		var baseScripts = [
			'lodash/lodash',
			'jquery/dist/jquery',
			'bootstrap/dist/js/bootstrap',
			'angular/angular',
			'angular-ui-router/release/angular-ui-router'
		];

		for (var li in baseScripts) {
			scripts.push(baseScripts[li] + min + '.js');
		}

		scripts.push(min ? 'sprintf/dist/sprintf.min.js' : 'sprintf/src/sprintf.js');
		scripts.push('angular-restful/dist/angular-restful.js');

		for (var li in scripts) {
			document.write('<script type="text/javascript" language="javascript" src="' + bc + scripts[li] + '"></script>');
		}
	};


	var min = '.min';
	var bc = './bower_components/';
	loadCsses(bc, min);
	loadJses(bc, min);

})();
