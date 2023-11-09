import { Request, Response } from 'express';
import { userServices } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body;
  const result = await userServices.createUser(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully!',
    data: result,
  });
});
const findOneUser= catchAsync(async (req: Request, res: Response) => {
  const {email}=req.params
  const result = await userServices.findOneUser(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User create successfully!',
    data: result,
  });
});

// delete User
const userDelete = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userServices.deleteUsers(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!!!',
    data: result,
  });
});

// update User
const userUpdate = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await userServices.updateUsers(id, updateData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!!!',
    data: result,
  });
});

// Admin User
const userAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userServices.adminUser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin successfully!!!',
    data: result,
  });
});

// all User data get
const userAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllUsers();

  

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully!!!',
    data: result,
  });
});


export const userController = {
  createUser,
  findOneUser,
  userDelete,
  userUpdate,
  userAllData,
  userAdmin
};
