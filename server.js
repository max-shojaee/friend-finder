// ==============================================
// DEPENDENCIES
//===============================================
var express = require("express");
var bodyParser = require("body-parser");

// ==============================================
// EXPRESS CONFIGURATION
//===============================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ===============================================
// ROUTERS
//================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// ===============================================
// LISTENER
//================================================
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});