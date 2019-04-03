function responseFormatter(status, responseData) {
    let response = {
        status: status,
        message: status==201?'Creation successful':'Operation successful',
        data: responseData
    }
}