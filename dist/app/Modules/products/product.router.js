"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post('/create-product', (0, validateRequest_1.default)(product_validation_1.productValidation.createProductZodSchema), product_controller_1.productController.createProduct);
router.get('/', product_controller_1.productController.allProducts);
router.get('/:id', product_controller_1.productController.singleProducts);
exports.productRouters = {
    router,
};
