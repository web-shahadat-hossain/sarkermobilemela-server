import express from 'express';
import validateRequest from '../../../middleware/validateRequest';
import { productController } from './product.controller';
import { productValidation } from './product.validation';

const router = express.Router();

router.post(
  '/create-product',
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
