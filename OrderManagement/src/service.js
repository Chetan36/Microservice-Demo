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
    },
    addNewOrder: function(order, userId) {
        let totalPrice = 0
        order.items.map(item => {
            totalPrice += item.price
        })
        let dbOrder = {
            userId: userId,
            items: order.items,
            netAmount: totalPrice,
            placedDate: Date.now()
        }
        return repository.insert(dbOrder);
    },
    updateOrder: function(orderId, order) {

    },
    deleteOrder: function(orderId) {

    }
}