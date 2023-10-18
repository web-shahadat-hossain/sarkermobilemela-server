import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { productServices } from './product.services';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await productServices.createProduct(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully!',
    data: result,
  });
});
const allProducts= catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.allProductsServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});
const singleProducts= catchAsync(async (req: Request, res: Response) => {

  const {id}=req.params

  const result = await productServices.singleProductsServices(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});

export const productController = {
  createProduct,
  allProducts,
  singleProducts
};
