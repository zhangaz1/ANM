'use strict';


module.exports = function(appContext) {
	require('./createMongoose')(appContext);

	require('./images.js')(appContext);

	require('./someData.js')(appContext);
};