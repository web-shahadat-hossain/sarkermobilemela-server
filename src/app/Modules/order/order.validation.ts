import { z } from 'zod';

const singleOrderSchema = z.object({
    body: z.object({
    productsId: z.string({required_error:"Product Id is required"}), // Assuming IProduct is defined similarly
    totalPrice: z.string({required_error:"total Price is required"}),
    quantity: z.number(),
    shipping: z.string({required_error:"Shipping is required"}),
    fullName:z.string({required_error:"Name is required"}),
    contactNo: z.string({required_error:"Contact No is required"}),
    email: z.string({required_error:"Email is required"}).email(), // Validate email format
    transactionId: z.string({required_error:"transaction Id is required"}),
    address: z.string({required_error:"Address is required"}),
    comment: z.string({required_error:"Comment is required"}),})
  
});

// Now you can use the `orderSchema` to validate incoming data

export const orderValidation = {
    singleOrderSchema,
  };