import apiError from '../../../errors/apiError';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (data: IProduct): Promise<IProduct | null> => {

  const result = await Product.create(data);

  if (!result) {
    throw new apiError(400, 'Failed to create Products!');
  }

  return result;
};


const allProductsServices = async (): Promise<IProduct[] | null> => {

  const result = await Product.find({});

  if (!result) {
    throw new apiError(400, 'Failed to get Products!');
  }

  return result;
};

const singleProductsServices = async (id:string): Promise<IProduct | null> => {

  const result = await Product.findById({_id:id});

  if (!result) {
    throw new apiError(400, 'Failed to single Products!');
  }

  return result;
};

export const productServices = {
  createProduct,
  allProductsServices ,
  singleProductsServices
};
