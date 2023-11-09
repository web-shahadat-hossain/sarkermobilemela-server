"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCart = exports.Order = void 0;
const mongoose_1 = require("mongoose");
// Create the Mongoose schema
const orderSchema = new mongoose_1.Schema({
    productsId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    totalPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    shipping: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
// Create the Mongoose schema
const orderCartSchema = new mongoose_1.Schema({
    products: {
        type: [{
                title: String,
                price: String,
                description: String,
                category: { enum: ["headphone", "watch", "phone"] },
                image: [String],
                stock: Number,
                color: [String],
                brand: String,
                feature: [String],
                discount: Number,
                quantityCart: Number
            }
        ],
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.OrderCart = (0, mongoose_1.model)('OrderCart', orderCartSchema);
