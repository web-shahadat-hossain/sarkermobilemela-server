import httpStatus from 'http-status';
import { ENUM_ROLE } from '../../../enums/role';
import apiError from '../../../errors/apiError';
import { IUser } from './user.interface';
import { User } from './user.model';


const createUser = async (user: IUser): Promise<IUser | null> => {
  user.role = ENUM_ROLE.user;

  const result = await User.create(user);

  if (!result) {
    throw new apiError(400, 'Failed to create User!');
  }

  return result;
};
const findOneUser = async (email:string): Promise<IUser | null> => {

  const result = await User.findOne({email});

  if (!result) {
    throw new apiError(400, 'User not found!');
  }

  return result;
};


// update user services
const updateUsers = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const exist = await User.findOne({ _id: id });
  if (!exist) {
    throw new apiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const allowedProperties = {
    name: payload.name,
    password: payload.password,
    contactNo: payload.contactNo,
    address: payload.address,
    image: payload.image,
  };


  const result = await User.findOneAndUpdate({ _id: id }, allowedProperties, {
    new: true,
  });

  return result;
};
// admin user services
const adminUser = async (
  id: string,
  ): Promise<IUser | null> => {
  const exist = await User.findOne({ _id: id });
  if (!exist) {
    throw new apiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const result = await User.findOneAndUpdate({ _id: id }, {
    role:ENUM_ROLE.ADMIN
  }, {
    new: true,
  });

  return result;
};


// delete User services
const deleteUsers = async (id: string) => {
  const result = await User.findByIdAndDelete({ _id: id });

  return result;
};


// get all user services
const getAllUsers = async (
): Promise<IUser[]> => {
  // pagination code start here
  const result = await User.find({})
  return result
  


};


export const userServices = {
  createUser,
  findOneUser,
  deleteUsers,
  updateUsers,
  getAllUsers,
  adminUser
};
