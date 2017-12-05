// ==============================================
// DEPENDENCIES
//===============================================
var fs = require("fs");

// ==============================================
// LOAD THE DATA
//===============================================
var friends = require("../data/friends.json");


// ==============================================
// ROUTERS
//===============================================
module.exports = function(app) {

    // get method - returns the friends api 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // post method - compares the user's info with all
    // the friends in the list to find and return the 
    // best match, and to save the user's data to 
    // friends.json

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        var leastDiff = 0;
        var scoreArray = [];
        var bestFriendIndex = 0;


        // loop through the list of friends
        for (var i = 0; i < friends.length; i++) {

            // add up the difference in each category between the new user and the current friend 
            var diff =0; 
            for (var j=0; j< friends[i].scores.length; j++)
            {
                diff += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }

            // store the total difference for each friend in the scoreArray[]
            scoreArray[i] = diff;
        }

        // loop through the scoreArray[] and find the least difference. 
        // The index of the least difference will point to the best 
        // match in the friends list.

        leastDiff = scoreArray[0];

        for (var i = 0; i < scoreArray.length; i++) {
            if (leastDiff > scoreArray[i])
            {
                leastDiff = scoreArray[i];
                bestFriendIndex = i;
            }
            
        }

        // push the new user to the friends list
        friends.push(newFriend);    

        // save the list to friends.json             
        fs.writeFile("./app/data/friends.json", JSON.stringify(friends, null, 2)); 

        // return the info for the best match found
        res.json(friends[bestFriendIndex]);
    });
};