import express from 'express';
import validateRequest from '../../../middleware/validateRequest';
import { orderValidation } from './order.validation';
import { orderController } from './order.controller';

const router = express.Router();

router.post(
  '/single-order',
  validateRequest(orderValidation.singleOrderSchema),
  orderController.createSingleOrder
);

router.patch(
    '/single-order/:id',
    orderController.updateSingleOrder
  );


router.delete(
    '/single-order/:id',
    orderController.deleteSingleOrder
  );

router.get(
  '/single-order',
  orderController.allGetSingleOrder
);


export const orderRouters = {
  router,
};
