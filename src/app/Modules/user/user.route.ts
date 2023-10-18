import express from 'express';
import { userController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../../middleware/validateRequest';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser
);
router.get(
  '/:email',
  userController.findOneUser
);

export const userRouters = {
  router,
};
