import express from 'express';
import validateRequest from '../../../middleware/validateRequest';
import { productController } from './product.controller';
import { productValidation } from './product.validation';
import authRequest from '../../../middleware/authRequest';
import { ENUM_ROLE } from '../../../enums/role';

const router = express.Router();

router.post(
  '/create-product',
  authRequest(ENUM_ROLE.ADMIN, ENUM_ROLE.superAdmin),

  validateRequest(productValidation.createProductZodSchema),
  productController.createProduct
);
router.get(
  '/',
  productController.allProducts
);

router.get(
  '/:id',
  productController.singleProducts
);

export const productRouters = {
  router,
};
