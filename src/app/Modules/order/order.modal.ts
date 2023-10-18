import { Schema, Types, model } from "mongoose";
import { IOrder } from "./order.interface";


// Create the Mongoose schema
const orderSchema = new Schema<IOrder>({
    productsId: {
      type: Types.ObjectId,
      ref: 'Products', // You can specify the reference model if IProduct is a different Mongoose model
      required: true,
    },
    totalPrice: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    shipping: {
        type:String,
        required:true
    },
    fullName: {
        type:String,
        required:true
    },
    contactNo: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    transactionId: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    status:{
        type:Boolean
    }
   
  },{
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
},);

export const Order = model<IOrder>('Order', orderSchema);
