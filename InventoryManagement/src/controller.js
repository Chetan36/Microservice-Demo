const service = require('./service');
const config = require('./config');

module.exports = {
    getItems: function(req, res, next) {
        console.log("I am here")
        service.getAllItems()
        .then(response => {
            res.status(200).json(responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getItemById: function(req, res, next) {
        service.getItemById(req.params.id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            next(error);
        })
    },
    getItemByName: function(req, res, next) {
        service.getItemByName(req.params.name)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            next(error);
        })
    },
    getItemsWithinStock: function(req, res, next) {
        service.getItemsBetweenStockValues(req.body.from, req.body.to)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            next(error);
        })
    },
    getItemsOutOfStock: function(req, res, next) {
        service.getItemsWithStockValue(0)
        .then(response => {
            res.status(200).json(responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    addItem: function(req, res, next) {

    },
    updateItem: function(req, res, next) {

    },
    deleteItem: function(req, res, next) {

    }
}