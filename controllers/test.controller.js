"use strict"
var TEST = require("../constants/TEST.contants.json");
const { v4: uuidv4 } = require('uuid');
module.exports = {
    getAllData: (request, response) => {
        response.status(200).send({ "msg": "OK", "data": TEST.ALL_DATA })
    },
    saveData: async (request, response) => {
        let requestData = request.body;
        requestData["_id"] = uuidv4();
        TEST.ALL_DATA.push(requestData);
        await response.status(200).send({ "msg": "OK", "data": requestData })
    },
    updateData: async (request, response) => {
        let requestData = request.body;
        let i = await getIndexData(requestData);
        if (i != -1) {
            TEST.ALL_DATA[i] = requestData;
            response.status(200).send({ "msg": "OK", "data": requestData })
        }
        else response.status(404).send({ "msg": "No data found", "data": null })
    },
    deleteData: async (request, response) => {
        let requestData = request.body;
        let i = getIndexData(requestData);
        if (i != -1) {
            delete TEST.ALL_DATA.splice(i, 1);
            response.status(200).send({ "msg": "OK", "data": requestData })
        }
        else response.status(404).send({ "msg": "No data found", "data": null })
    },
    getByIdData: async (request, response) => {
        console.log(request.params);
        let i = TEST.ALL_DATA.findIndex(obj => { return obj._id === request.params.id });
        if (i != -1) response.status(200).send({ "msg": "OK", "data": TEST.ALL_DATA[i] })
        else response.status(404).send({ "msg": "No data found", "data": null })
    },
}
var getIndexData = (data) => {
    return TEST.ALL_DATA.findIndex(obj => { return obj._id === data._id });
}