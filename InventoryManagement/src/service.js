const repository = require('./repository');

module.exports = {
    getAllItems: function() {
        return repository.findAll();
    },
    getItemById: function(id) {
        return repository.findById(id);
    },
    getItemByName: function(name) {
        return repository.findByItemName(name);
    },
    getItemByBarcode: function(barcode) {
        return repository.findByBarcode(barcode);
    },
    getItemsByPrice: function(price) {
        return repository.findByPrice(price);
    },
    getItemsBetweenStockValues: function(fromStockValue, toStockValue) {
        return repository.findByStock(stockValue);
    },
    getItemsWithStockValue: function(stockValue) {
        return repository.findByStock(stockValue);
    },
    addNewItem: function(item) {
        let item = {
            id: 0,
            itemName: item.itemName,
            category: item.category,
            hsnsac: item.hsnsac,
            barcode: item.barcode,
            price: item.price,
            stock: item.stock
        }
        return repository.insert(item);
    },
    updateItem: function(item) {
        return repository.update(item);
    },
    deleteItem: function(id) {
        return repository.delete(id);
    }
}