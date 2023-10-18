import { Types } from "mongoose";
import { IProduct } from "../products/product.interface";

export type IOrder = {
  productsId:Types.ObjectId | IProduct;
  totalPrice:string;
  quantity:number;
  shipping:string;
  fullName:string;
  contactNo:string;
  email:string;
  transactionId:string;
  address:string;
  comment:string;
  status:boolean;
  };
  