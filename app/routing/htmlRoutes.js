// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`.
// This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`.
// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require('path');

module.exports = function(app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	app.get('/home', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// If no matching route is found default to home
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};
