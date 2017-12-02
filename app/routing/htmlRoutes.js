var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile("public/home.html", {root: "./app" });
    });

    app.get("/survey", function(req, res) {
        res.sendFile("public/survey.html", {root: "./app" });
    });

};