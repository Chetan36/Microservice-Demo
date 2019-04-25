const mongoose = require('mongoose');
const model = require('./model');

module.exports = {
    findAll: function() {
        return model.find().exec();
    },
    findById: function(id) {
        return model.findById(id).exec();
    },
    findByFullName: function(fullName) {
        return model.findOne({fullName: fullName}).exec();
    },
    findByContactNumber: function(contactNumber) {
        return model.find({contactNumber: contactNumber}).exec();
    },
    findByEmailId: function(emailId) {
        return model.find({emailId: emailId}).exec();
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