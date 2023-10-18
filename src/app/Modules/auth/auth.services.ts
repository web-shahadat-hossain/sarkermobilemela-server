import httpStatus from 'http-status';
import apiError from '../../../errors/apiError';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import bcrypt from 'bcrypt';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isExistUser = await User.findOne(
    { email },
    { email: 1, password: 1 }
  ).lean();
  if (!isExistUser) {
    throw new apiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  // password match
  const matchPassword = await bcrypt.compare(password, isExistUser?.password);

  if (!matchPassword) {
    throw new apiError(httpStatus.UNAUTHORIZED, 'password is incorrect');
  }

  const { email: Email, role } = isExistUser;

  const secretToken = jwtHelpers.createToken(
    { email: Email, role },
    config.jwt.secret_token as Secret,
    config.jwt.secret_expire_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { email: Email, role },
    config.jwt.refresh_token as Secret,
    config.jwt.refresh_expire_in as string
  );
  return {
    secretToken,
    refreshToken,
    email:Email
  };
};

export const authServices = {
  loginUser,
};
