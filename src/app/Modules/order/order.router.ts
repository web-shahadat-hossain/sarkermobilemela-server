import express from 'express';
import validateRequest from '../../../middleware/validateRequest';
import { orderValidation } from './order.validation';
import { orderController } from './order.controller';
import authRequest from '../../../middleware/authRequest';
import { ENUM_ROLE } from '../../../enums/role';

const router = express.Router();

router.post(
  '/single-order',
  validateRequest(orderValidation.singleOrderSchema),
  orderController.createSingleOrder
);

router.patch(
    '/single-order/:id',
    authRequest(ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),

    orderController.updateSingleOrder
  );


router.delete(
    '/single-order/:id',
    authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
   
    orderController.deleteSingleOrder
  );

router.get(
  '/single-order',
  authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),

  orderController.allGetSingleOrder
);


router.post(
  '/cart-order',
  orderController.createCartOrder
);

router.patch(
    '/cart-order/:id',
    // authRequest(ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
    orderController.updateCartOrder
  );


router.delete(
    '/cart-order/:id',
    // authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
   
    orderController.deleteCartOrder
  );

router.get(
  '/cart-order/:email',
  orderController.randomFindCartOrder
);
router.get(
  '/cart-order',
  // authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
  orderController.allGetCartOrder
);


export const orderRouters = {
  router,
};
