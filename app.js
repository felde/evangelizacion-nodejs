"use strict"

var express = require("express");
var http = require("http")
var app = express();
const bodyParser = require("body-parser")

//loading public routes
let test = require("./routes/test.routes");

//Usar el request como json
app.use(bodyParser.json());

//configurar cabeceras http
// app.use((req, res, next) => {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Token"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//     res.header("Access-Control-Allow-Origin", "*");

//     next();
// });

//Ubicación expuesta del sitio
//app.use(express.static("public"));

//apis uses
app.use("/api/test", test);

//se levanta una constante de server
var server = http.createServer(app);
module.exports = server;