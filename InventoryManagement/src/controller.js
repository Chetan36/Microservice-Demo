const service = require('./service');
const httpconfig = require('./httpconfig');

module.exports = {
    getItems: function(req, res, next) {
        service.getAllItems()
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getItemById: function(req, res, next) {
        service.getItemById(req.params.id)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getItemByName: function(req, res, next) {
        service.getItemByName(req.params.name)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getItemsWithinStock: function(req, res, next) {
        service.getItemsBetweenStockValues(req.body.from, req.body.to)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getItemsOutOfStock: function(req, res, next) {
        service.getItemsWithStockValue(0)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    addItem: function(req, res, next) {
        service.addNewItem(req.body)
        .then(response => {
            res.status(201).json(httpconfig.responseFormatter(201, response));
        })
        .catch(error => {
            next(error);
        })
    },
    updateItem: function(req, res, next) {
        service.updateItem(req.params.id, req.body)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    deleteItem: function(req, res, next) {
        service.deleteItem(req.params.id)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    }
}