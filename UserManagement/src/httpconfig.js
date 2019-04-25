module.exports = {

    responseFormatter: function(status, responseData) {
        let response = {
            status: status,
            message: status==201?'Creation successful':'Operation successful',
            data: responseData
        }
        return response;
    }

}