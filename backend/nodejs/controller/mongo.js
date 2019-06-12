const { mongoService } = require('../service');
const { responseModel } = require('../model');

async function mongoInsert(data,collection) {

    try {
        await mongoService.connect();
        let mongo = await mongoService.insert(data,collection);
        return responseModel.successResponse(mongo.message,{});
    }

 catch (err) {

    errMessage = typeof err == 'string' ? err : err.message;
    return responseModel.failResponse(errMessage,{});
}
}



async function mongoUpdate(query,newvalues) {

    try {
        await mongoService.connect();
       
        // var newvalues = { $set: {status: "Failure", message : errMessage } };

        let mongo = await mongoService.update(query, newvalues ,'transactions')
        return responseModel.successResponse(mongo.message, {});

    }

 catch (err) {

    errMessage = typeof err == 'string' ? err : err.message;
    return responseModel.failResponse(errMessage,{});
}
}


async function mongoGet(query) {

    try {
        await mongoService.connect();
        let mongo = await mongoService.get(query,'updates');
        return responseModel.successResponse("success",mongo);

    }

 catch (err) {

    errMessage = typeof err == 'string' ? err : err.message;
    return responseModel.failResponse(errMessage,{});
}
}





module.exports = {
    mongoInsert,
    mongoGet,
    mongoUpdate
}