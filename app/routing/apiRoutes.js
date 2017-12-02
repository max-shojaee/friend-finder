var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");

var app = express();
var PORT = process.env.PORT || 8080;


// for i in range(length(questions)):
// 	for j in range(length(friends)):
// 		diff = aboslute( new_person.questions[i] - friends[j].questions[i] ):
// 			score[i] += diff



module.exports = function(app) {

    //get the friends page and return data
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // post the friends + the new friend and comparison to return best match
    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;

        //new friend array of chosen
        var newFriendScore = [];

        // friends in databse array of chosen
        var compareFriends = [];

        console.log(newFriend);

        for (i = 0; i < friends.length; i++) {
            compareFriends = friends[i].scores;
            console.log("Friends Scores: " + compareFriends);
        }

        for (i = 0; i < newFriend.length; i++) {
            newFriendScore = newFriend[i].scores;
            console.log("New Friend Scores" + newFriendScore);
        }

        // friends: 
        // person_1 : [1, 2, 4]
        // person_2 : [3, 3, 2]
        // score_comparison = [0, 0]

        //first time through loop (question 1): [0, 2]
        //second time (question 2): [0 + 0 = 0, 1 + 2 = 3]
        //third time (question 3): [0 + 0 + 1 = 1, 1 + 2 + 1 = 4]
        //end : [1, 4]

        //for (i = 0; i < newFriendScore.length; i++) {
        	//console.log(newFriend[i] - compareFriends[i]);
        	// for (i = 0; i < newFriendScore.length; i++){

        	// }
        
        friends.push(newFriend);
        console.log(friends);
        res.json(newFriend);
    });
};