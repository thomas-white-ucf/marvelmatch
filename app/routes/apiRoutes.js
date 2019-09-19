// LOAD DATA - link routes to a series of "data" sources, such as current friends list, or marvel characters list
var friends = require('../data/friends');

// ROUTES with express

module.exports = function(app) {
	// ** A GET route with the url `/api/friends`.
	// ** This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// ** A POST routes `/api/friends`.
	// ** This will be used to handle incoming survey results.
	// ** This route will also be used to handle the compatibility logic.
	app.post('/api/friends', function(req, res) {
		// console.log("req.body = ", req.body)
		// console.log('req.body.name = ', req.body.name);
		
		// add the new friend to the array
		if (friends.length < 1000) {
			console.log('=========================');
			friends.push(req.body);
			res.json(true);
			// response with true

			console.log("new friend array friend = req.body =", req.body);
			console.log('=========================');
		} else {
			res.json(false);
			console.log("fail FAIL  - - - - - - - FAIL ");
		}

	});
};



// ======= END

// =======	_Marvel Match









// =======

// =======
// =======
// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
// req.body is available since we're using the body parsing middleware

// Determine the user's most compatible friend using the following as a guide:
//    	* Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

//    	* With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]` * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]` * Total Difference: **2 + 1 + 2 =** **_5_**
//    	* Remember to use the absolute value of the differences.
// 				Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    	* The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    	* The modal should display both the name and picture of the closest match.
// =======
// =======

// ===============================================================================
//    Solved Hot Restaurant

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

// ===================================================================
// ===================================================================

//  (Express SendFile - GET request from server to HTML views)
//  (Jquery AJAX (get/POST))  server to HTML views

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

// app.post("/api/clear", function(req, res) {
//   // Empty out the arrays of data
//   tableData.length = 0;
//   waitListData.length = 0;

//   res.json({ ok: true });
// });

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, FRIENDS etc.
// ===============================================================================
