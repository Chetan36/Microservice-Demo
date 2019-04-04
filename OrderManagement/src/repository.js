const mongoose = require('mongoose');
const model = require('./model');

module.exports = {
    findAll: function() {
        return model.find().exec();
    },
    findById: function(id) {
        return model.findById(id).exec();
    },
    findByOrderId: function(orderId) {
        return model.findOne({orderId: orderId}).exec();
    },
    findByUserId: function(userId) {
        return model.find({userId: userId}).exec();
    },
    findByPlacedDate: function(date) {
        return model.find({placedDate: placedDate}).exec();
    },
    findByPlacedDateBetween: function(from, to) {
        return model.find({placedDate: {$gte: lo, $lte: hi}}).exec();
    },
    findByNetAmount: function(netAmount) {
        return model.find({netAmount: netAmount}).exec();
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
        return model.remove({id: id}).exec();
    },
    deleteAll: function() {
        return model.remove().exec();
    }
}