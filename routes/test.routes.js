"use strict"

//dependencias 
let express = require("express");
let api = express.Router();
//controller injection
let controller = require("../controllers/test.controller");
//middlewares
let middlewareGBody = require("../middleware/gValidate-body.miwdlleware");

api.get("/", controller.getTest);
api.get("/get-all", controller.getAllData);
api.get("/get/:id", middlewareGBody.validateParamsID, controller.getDataById);
api.post("/create", middlewareGBody.validateBodyData, controller.addData);
api.patch("/update", middlewareGBody.validateBodyData, controller.updateData);
api.delete("/delete/:id", middlewareGBody.validateParamsID, controller.deleteData);
module.exports = api;