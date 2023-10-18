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
const updateSingleOrder = catchAsync(async (req: Request, res: Response) => {
const {id}= req.params
  const result = await orderServices.updateSingleOrder(id);

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

export const orderController = {
    createSingleOrder,
    allGetSingleOrder,
    updateSingleOrder,
    deleteSingleOrder,
   
};
