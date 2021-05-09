"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const contracts_1 = require("../contracts");
const route_1 = require("../server/route");
class Router {
    constructor() {
        this.routes = [];
    }
    get(path, controller) {
        this.routes.push(new route_1.Route(contracts_1.Methods.GET, path, controller));
    }
    post(path, controller) {
        this.routes.push(new route_1.Route(contracts_1.Methods.GET, path, controller));
    }
    getRoutes() {
        return this.routes;
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map