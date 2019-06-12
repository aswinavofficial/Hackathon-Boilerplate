


function Response() {

    this.code = 200;
    this.success = true;
    this.message = "";
    this.data = {};
}


function successResponse(message, data) {

    let res = new Response();
    res.code = 200;
    res.success = true;
    res.message = message;
    res.data = data;

    return res;

}



function failResponse(message, data) {

    let res = new Response();
    res.code = 500;
    res.success = false;
    res.message = message;
    res.data = data;
    return res;

}



module.exports = {
    successResponse,
    failResponse
}