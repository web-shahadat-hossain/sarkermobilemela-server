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
const router = express_1.default.Router();
router.post('/single-order', (0, validateRequest_1.default)(order_validation_1.orderValidation.singleOrderSchema), order_controller_1.orderController.createSingleOrder);
router.patch('/single-order/:id', order_controller_1.orderController.updateSingleOrder);
router.delete('/single-order/:id', order_controller_1.orderController.deleteSingleOrder);
router.get('/single-order', order_controller_1.orderController.allGetSingleOrder);
exports.orderRouters = {
    router,
};
