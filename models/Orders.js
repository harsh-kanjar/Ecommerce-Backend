const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    shippingAdress1: { type: String, required: true },
    shippingAdress2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    totalPrice: { type: Number, required: true },
    dateOrdered: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Orders', OrdersSchema);
