const repository = require('./repository');

module.exports = {
    getAllOrders: function() {
        return repository.findAll();
    },
    getOrderById: function(id) {
        return repository.findById(id);
    },
    getOrderByOrderId: function(orderId) {
        return repository.findByOrderId(orderId);
    },
    getOrdersByUserId: function(userId) {
        return repository.findByUserId(userId);
    },
    getOrdersByPlacedDate: function(date) {
        return repository.findByPlacedDate(date)
    }
}