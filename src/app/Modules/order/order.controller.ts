import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { orderServices } from './order.services';

const createSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await orderServices.createSingleOrder(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order successfully!',
    data: result,
  });
});

const allGetSingleOrder = catchAsync(async (req: Request, res: Response) => {

  const result = await orderServices.allGetSingleOrder();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});


const updateCartOrder = catchAsync(async (req: Request, res: Response) => {
const {id}= req.params
  const result = await orderServices.updateCartOrder(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Successfully!',
    data: result,
  });
});
const deleteSingleOrder = catchAsync(async (req: Request, res: Response) => {
const {id}= req.params
  const result = await orderServices.deleteSingleOrder(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete Successfully!',
    data: result,
  });
});


const createCartOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await orderServices.createOrderCart(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order successfully!',
    data: result,
  });
});


const allGetCartOrder = catchAsync(async (req: Request, res: Response) => {

  const result = await orderServices.allGetCartOrder();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});
const randomFindCartOrder = catchAsync(async (req: Request, res: Response) => {
  const {email}= req.params
  const result = await orderServices.randomFindCartOrder(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully!',
    data: result,
  });
});



const updateSingleOrder = catchAsync(async (req: Request, res: Response) => {
const {id}= req.params
  const result = await orderServices.updateCartOrder(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Successfully!',
    data: result,
  });
});



const deleteCartOrder = catchAsync(async (req: Request, res: Response) => {
const {id}= req.params
  const result = await orderServices.deleteCartOrder(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete Successfully!',
    data: result,
  });
});




export const orderController = {
    createSingleOrder,
    allGetSingleOrder,
    updateSingleOrder,
    deleteSingleOrder,
    createCartOrder,
    allGetCartOrder,
    updateCartOrder,
    deleteCartOrder,
    randomFindCartOrder
   
};
