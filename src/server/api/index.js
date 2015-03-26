'use strict';


module.exports = function(appContext) {
	require('./someData.js')(appContext);
	require('./images.js')(appContext);
};