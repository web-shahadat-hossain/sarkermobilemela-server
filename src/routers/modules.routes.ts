import { authRouters } from '../app/Modules/auth/auth.router';
import { orderRouters } from '../app/Modules/order/order.router';
import { productRouters } from '../app/Modules/products/product.router';
import { userRouters } from '../app/Modules/user/user.route';

const modulesRoutes = [
  // user router start here
  {
    path: '/users',
    route: userRouters.router,
  },
  {
    path: '/auth',
    route: authRouters.router,
  },
  {
    path: '/product',
    route: productRouters.router,
  },
  {
    path: '/order',
    route: orderRouters.router,
  },
];

export default modulesRoutes;
