"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const order_validation_1 = require("./order.validation");
const order_controller_1 = require("./order.controller");
const authRequest_1 = __importDefault(require("../../../middleware/authRequest"));
const role_1 = require("../../../enums/role");
const router = express_1.default.Router();
router.post('/single-order', (0, validateRequest_1.default)(order_validation_1.orderValidation.singleOrderSchema), order_controller_1.orderController.createSingleOrder);
router.patch('/single-order/:id', (0, authRequest_1.default)(role_1.ENUM_ROLE.ADMIN, role_1.ENUM_ROLE.superAdmin), order_controller_1.orderController.updateSingleOrder);
router.delete('/single-order/:id', (0, authRequest_1.default)(role_1.ENUM_ROLE.ADMIN, role_1.ENUM_ROLE.superAdmin), order_controller_1.orderController.deleteSingleOrder);
router.get('/single-order', (0, authRequest_1.default)(role_1.ENUM_ROLE.ADMIN, role_1.ENUM_ROLE.superAdmin), order_controller_1.orderController.allGetSingleOrder);
router.post('/cart-order', order_controller_1.orderController.createCartOrder);
router.patch('/cart-order/:id', 
// authRequest(ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
order_controller_1.orderController.updateCartOrder);
router.delete('/cart-order/:id', 
// authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
order_controller_1.orderController.deleteCartOrder);
router.get('/cart-order/:email', order_controller_1.orderController.randomFindCartOrder);
router.get('/cart-order', 
// authRequest( ENUM_ROLE.ADMIN , ENUM_ROLE.superAdmin),
order_controller_1.orderController.allGetCartOrder);
exports.orderRouters = {
    router,
};
