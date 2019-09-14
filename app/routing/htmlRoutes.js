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

	// Use path dependency to get user directory name = __dirname

	// * A GET Route to `/survey` which should display the survey page.
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// * A default, catch-all route that leads to `home.html` which displays the home page.
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};
