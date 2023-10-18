import { z } from 'zod';
const createProductZodSchema = z.object({
  body: z.object({
    title: z.string( { required_error: 'Title is required' }),
    price: z.string( { required_error: 'Price is required' }),
    description: z.string( { required_error: 'Description is required' }),
    category: z.enum(["headphone", "watch", "phone"]),
    image: z.array(z.string({required_error:"Images is required"})),
    stock: z.number({required_error:"Stock is required"}),
    color: z.array(z.string()),
    brand: z.string( { required_error: 'Title is required' }),
  })
});


export const productValidation = {
  createProductZodSchema,
};
