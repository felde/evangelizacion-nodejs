"use strict"

var express = require("express");
var http = require("http");
var bodyParser = require("body-parser")

var app = express();

let testRoutes = require("./routes/test.routes")

app.use(bodyParser.json());

app.use("/test", testRoutes)

//Ubicación expuesta del sitio
app.use(express.static("public"));


var server = http.createServer(app);

module.exports = server;