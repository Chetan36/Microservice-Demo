const mongoose = require('mongoose');
const model = require('./model');

module.exports = {
    findAll: function() {
        return model.find().exec();
    },
    findById: function(id) {
        return model.findById(id).exec();
    },
    findByItemName: function(name) {
        return model.findOne({itemName: name}).exec();
    },
    findByCategory: function(category) {
        return model.find({category: category}).exec();
    },
    findByHsnsac: function(hsnsac) {
        return model.findOne({hsnsac: hsnsac}).exec();
    },
    findByBarcode: function(barcode) {
        return model.findOne({barcode: barcode}).exec();
    },
    findByPrice: function(price) {
        return model.find({price: price}).exec();
    },
    findByStock: function(stockValue) {
        return model.find({stock: stockValue}).exec();
    },
    findByStockBetween: function(lo, hi) {
        return model.find({stock: {$gte: lo, $lte: hi}}).exec();
    },
    insert: function(item) {
        item["_id"] = mongoose.Types.ObjectId();
        const Item = new model(item)
        return Item.save();
    },
    update: function(id, item) {
        let updateItem = {};
        for (var param in user) {
            if (user[param] != '' || user[param] != null) {
                updateUser[param] = user[param];
            }
        }
        return model.findOneAndUpdate({_id: id}, { $set: updateItem }, { new: true }).exec();
    },
    delete: function(id) {
        return model.remove({_id: id}).exec();
    },
    deleteAll: function() {
        return model.remove().exec();
    }
}