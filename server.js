// =============================================================
var express = require('express');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3066;

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets the static route visible to public
app.use(express.static(__dirname + '/public'));

// ===============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});

// ==============================================================================
// ==============================================================================
// URL Path Parsing
// Listener
// GET Routes (for rendering JSONs)  >> (server-data folder > HTML view)
// POST Route (Requests) >> (Jquery AJAX(Get/POST)) > Server to HTML
// GET Routes (For rendering HTML pages) >> Express SendFile (server to HTML)
// ==============================================================================
// ==============================================================================
