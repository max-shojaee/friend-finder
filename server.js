var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require routing and data files
var friends = require("./app/data/friends.js");
var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});