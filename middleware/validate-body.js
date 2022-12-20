"use strict"
module.exports = {
    validateBodyData: (request, response, next) => {
        let requestData = request.body;
        if (Object.keys(requestData).length != 0) next();
        else response.status(404).send({ "msg": "Request body is require", "data": requestData });
    }
}