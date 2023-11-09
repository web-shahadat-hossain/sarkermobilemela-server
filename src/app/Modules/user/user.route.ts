import express from 'express';
import { userController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../../middleware/validateRequest';
import authRequest from '../../../middleware/authRequest';
import { ENUM_ROLE } from '../../../enums/role';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser
);
router.get(
  '/:email',
  authRequest(ENUM_ROLE.user, ENUM_ROLE.ADMIN, ENUM_ROLE.superAdmin),
  userController.findOneUser
);
router.delete('/:id', userController.userDelete);
router.patch(
  '/:id',
  authRequest(ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
  validateRequest(UserValidation.updateUser),
  userController.userUpdate
);
router.patch(
  '/admin/:id',
  authRequest(ENUM_ROLE.superAdmin),
  userController.userAdmin
);
router.get('/',    authRequest(ENUM_ROLE.superAdmin), userController.userAllData);

export const userRouters = {
  router,
};
