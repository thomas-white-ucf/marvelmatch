// ==============================================================================
// URL Path Parsing
// Listener
// GET Routes (for rendering JSONs)  >> (server-data folder > HTML view)
// POST Route (Requests) >> (Jquery AJAX(Get/POST)) > Server to HTML
// GET Routes (For rendering HTML pages) >> Express SendFile (server to HTML)
// ==============================================================================

var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3066;
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});






// ==============================================================================
// ==============================================================================

// In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. 
// This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. 
// The app will then display the name and picture of the user with the best overall match.

// You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.




// ==============================================================================
// ==============================================================================
