const service = require('./service');
const httpconfig = require('./httpconfig');

module.exports = {
    getOrders: function(req, res, next) {
        service.getAllOrders()
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getOrderById: function(req, res, next) {
        service.getItemById(req.params.id)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getOrderByOrderId: function(req, res, next) {
        service.getItemByName(req.params.orderId)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    },
    getOrdersByUserId: function(req, res, next) {
        service.getItemsBetweenStockValues(req.body.from, req.body.to)
        .then(response => {
            res.status(200).json(httpconfig.responseFormatter(200, response));
        })
        .catch(error => {
            next(error);
        })
    }
}