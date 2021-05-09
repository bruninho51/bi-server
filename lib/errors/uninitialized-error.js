"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UninitializedError = void 0;
const errors_1 = require("@/contracts/errors");
class UninitializedError {
    constructor() {
        this.name = errors_1.Errors.ERROR_UNINITIALIZED;
        this.message = errors_1.Errors.ERROR_UNINITIALIZED;
    }
}
exports.UninitializedError = UninitializedError;
//# sourceMappingURL=uninitialized-error.js.map