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
		res.json(path.join(__dirname, 'survey.html'));
		// removed ../ from path
		// CHANGED ALL sendFile >>> to json
	});

	// * A default, catch-all route that leads to `home.html` which displays the home page.
	app.get('/', function(req, res) {
		res.json(path.join(__dirname, 'home.html'));
		// removed ../ from path
	});

	// * A default, catch-all route that leads to `home.html` which displays the home page.
	app.get('*', function(req, res) {
		res.json(path.join(__dirname, 'home.html'));
		// removed ../ from path
	});
};
