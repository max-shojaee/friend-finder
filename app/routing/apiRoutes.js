var friends = require("../data/friends.json");
var fs = require("fs");


module.exports = function(app) {

    //get the friends page and return data
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // post the friends + the new friend and comparison to return best match
    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        var leastDiff = 0;
        var scoreArray = [];
        var bestFriendIndex = 0;

        for (var i = 0; i < friends.length; i++) {

            var diff =0; 
            for (var j=0; j< friends[i].scores.length; j++)
            {
                diff += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }
            scoreArray[i] = diff;
        }

        leastDiff = scoreArray[0];

        for (var i = 0; i < scoreArray.length; i++) {
            if (leastDiff > scoreArray[i])
            {
                leastDiff = scoreArray[i];
                bestFriendIndex = i;
            }
            
        }

        friends.push(newFriend);                  
        fs.writeFile("./app/data/friends.json", JSON.stringify(friends, null, 2)); 
        res.json(friends[bestFriendIndex]);
    });
};