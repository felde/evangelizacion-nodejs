"use strict"
let express = require("express");
let controller = require("../controllers/test.controller");
let api = express.Router();
//middleware validator
let bodyValidation = require("../middleware/validate-body");
//api methods
api.get("/", controller.getAllData);
api.get("/:id", controller.getByIdData);
api.post("/", bodyValidation.validateBodyData, controller.saveData);
api.put("/", bodyValidation.validateBodyData, controller.updateData);
api.delete("/", bodyValidation.validateBodyData, controller.deleteData);
module.exports = api;