// ==============================================
// DEPENDENCIES
//===============================================
var path = require("path");

// ==============================================
// ROUTERS
//===============================================
module.exports = function(app) {

    // return the home page
    app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
  	});

    // return the survey page
  	app.get("/survey", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/survey.html"));
  	});

    // if no matching route is found default to home
  	app.get("*", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
  	});
};