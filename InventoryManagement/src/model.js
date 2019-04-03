const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

const InventorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type:Number,
        require:true,
        unique:true,
        ref: 'id'
    },
    itemName: {
        type: String,
        unique: true,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    hsnsac: {
        type: String,
        unique: true,
        require: true
    },
    barcode: {
        type: String,
        unique: true,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number
    }
}, {collection: 'Inventory', timestamps: true});

autoIncrement.initialize(mongoose.connection)
InventorySchema.plugin(autoIncrement.plugin, { model: 'Inventory', field: 'id', startAt:1, incrementBy:1})

module.exports = mongoose.model('Inventory', InventorySchema);