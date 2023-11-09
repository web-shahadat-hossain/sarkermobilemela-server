import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
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
    feature: { type: [String], required: true }, // Added the 'brand' property
    discount: { type: Number, required: true }, // Added the 'brand' property
  },
  { timestamps: true }
);

export const Product = model<IProduct>('Products', productSchema);
