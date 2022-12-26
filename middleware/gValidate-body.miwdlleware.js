"use strict"
module.exports = {
    validateBodyData: (request, response, next) => {
        let body = request.body;
        if (Object.keys(body).length != 0) next();
        else response.status(403).send({ "message": "Request body is require", "data": null, "code": "MX-4351" })
    },
    validateParamsID: (request, response, next) => {
        let params = request.params;
        if (params.id !== undefined) next();
        else response.status(400).send({ "message": "id params is missing", "data": null, "code": 400 })
    }
}