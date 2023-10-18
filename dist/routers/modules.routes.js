"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = require("../app/Modules/auth/auth.router");
const order_router_1 = require("../app/Modules/order/order.router");
const product_router_1 = require("../app/Modules/products/product.router");
const user_route_1 = require("../app/Modules/user/user.route");
const modulesRoutes = [
    // user router start here
    {
        path: '/users',
        route: user_route_1.userRouters.router,
    },
    {
        path: '/auth',
        route: auth_router_1.authRouters.router,
    },
    {
        path: '/product',
        route: product_router_1.productRouters.router,
    },
    {
        path: '/order',
        route: order_router_1.orderRouters.router,
    },
];
exports.default = modulesRoutes;
