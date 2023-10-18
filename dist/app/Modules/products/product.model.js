"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        enum: ["headphone", "watch", "phone"],
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    stock: { type: Number, required: true },
    color: {
        type: [String],
        required: true,
    },
    brand: { type: String, required: true }, // Added the 'brand' property
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Products', productSchema);
