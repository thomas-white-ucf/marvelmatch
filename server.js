var express = require('express');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3066;
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

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
// ==============================================================================

// In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app.
// This full-stack site will take in results from your users' surveys, then compare their answers with those from other users.
// The app will then display the name and picture of the user with the best overall match.

// You will use Express to handle routing.
// Make sure you deploy your app to Heroku so other users can fill it out.

// ==============================================================================
// ==============================================================================
