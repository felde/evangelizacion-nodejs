"use strict"
let data = require("../constants/TEST.contants.json");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getTest: (request, response) => {
        response.status(200).send({ "msg": " its OK" })
    },
    getAllData: (request, response) => {
        response.status(200).send({ "message": "OK", "data": data, "code": 200 })
    },
    getDataById: (request, response) => {
        let params = request.params;
        let i = data.ALL_DATA.findIndex(obj => { return obj._id === params.id })
        if (i != -1) response.status(200).send({ "message": "OK", "data": data.ALL_DATA[i], "code": 200 });
        else response.status(404).send({ "message": "obj not found", "data": null, "code": 400 })

    },
    deleteData: (request, response) => {
        let params = request.params;
        let i = data.ALL_DATA.findIndex(obj => { return obj._id === params.id })

        if (i != -1) {
            //delete data.ALL_DATA[i];
            delete data.ALL_DATA.splice(i, 1);
            response.status(200).send({ "message": "OK", "data": null, "code": 200 })
        }
        else response.status(404).send({ "message": "obj not found", "data": null, "code": 404 })

    },
    addData: (request, response) => {
        let body = request.body;
        body["_id"] = uuidv4();
        data.ALL_DATA.push(body);
        response.status(200).send({ "message": "OK", "data": body, "code": 200 })
    },
    updateData: (request, response) => {
        let body = request.body;
        let i = data.ALL_DATA.findIndex(obj => { return obj._id === body._id })
        if (i != -1) {
            data.ALL_DATA[i].last_name = body.last_name;
            data.ALL_DATA[i].name = body.name;
            response.status(200).send({ "message": "OK", "data": data.ALL_DATA[i], "code": 200 });
        }
        else response.status(404).send({ "message": "obj not found", "data": null, "code": 404 })
    },
}