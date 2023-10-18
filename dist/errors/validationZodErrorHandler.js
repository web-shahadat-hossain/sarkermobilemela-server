"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationZodErrorHandler = void 0;
const validationZodErrorHandler = (error) => {
    const errors = error.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[(issue === null || issue === void 0 ? void 0 : issue.path.length) - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    return {
        statusCode: 400,
        message: 'Validation Error',
        errorMessages: errors,
    };
};
exports.validationZodErrorHandler = validationZodErrorHandler;
