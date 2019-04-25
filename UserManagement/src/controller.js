const service = require('./service');
const httpconfig = require('./httpconfig');

module.exports = {
    getUsers: function(req, res, next) {
        service.getAllUsers()
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getUserById: function(req, res, next) {
        service.getItemById(req.params.id)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getUserByContactNumber: function(req, res, next) {
        service.getUserByContactNumber(req.params.contact)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response))
        })
        .catch(error => {
            next(error);
        });
    },
    addNewUser: function(req, res, next) {
        service.addNewUser(req.body)
        .then(response => {
            res.status(201).json(httpconfig.responseFormatter(201, response));
        })
        .catch(error => {
            next(error);
        });
    }
}