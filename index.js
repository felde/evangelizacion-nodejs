"use strict"
var app = require("./app");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "http://localhost:";

app.listen(port, () => {
    console.log("API server is running in:" + host + port);
})