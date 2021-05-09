"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias");
const express_1 = __importDefault(require("express"));
const test_1 = require("@/hello/test");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send(test_1.x());
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map