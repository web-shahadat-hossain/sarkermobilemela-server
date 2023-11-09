import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import config from '../../../config';
import { authServices } from './auth.services';

// login controller
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await authServices.loginUser(loginData);
  const { refreshToken, ...others } = result;
  const cookieOption = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  
  res.cookie('refreshToken', refreshToken, cookieOption);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successfully !',
    data: others,
  });
});

export const authController = {
  loginUser,
};
