"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const errors_1 = require("@/contracts/errors");
class NotFoundError {
    constructor() {
        this.name = errors_1.Errors.ERROR_NOT_FOUND;
        this.message = errors_1.Errors.ERROR_NOT_FOUND;
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found-error.js.map