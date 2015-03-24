'use strict';

exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

	// seleniumServerJar: 'E:/TestTools/selenium-server-standalone-2.44.0.jar',

	chromeDriver: 'E:/TestTools/chromedriver.exe',

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};