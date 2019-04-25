const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

const OrderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        require:true,
        unique:true,
        ref: 'id'
    },
    fullName: {
        type: String,
        require: true
    },
    contactNumber: {
        type: String,
        unique: true
    },
    emailId: {
        type: String,
        unique: true
    }
}, {collection: 'Order', timestamps: true});

autoIncrement.initialize(mongoose.connection)
OrderSchema.plugin(autoIncrement.plugin, { model: 'Order', field: 'id', startAt:1, incrementBy:1})

module.exports = mongoose.model('Order', OrderSchema);