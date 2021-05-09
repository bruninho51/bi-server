"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const contracts_1 = require("../contracts");
const path_to_regexp_1 = require("path-to-regexp");
class Route {
    constructor(method, pathName, controller) {
        this._method = method;
        this._pathName = pathName;
        this._controller = controller;
    }
    get controller() {
        return this._controller;
    }
    equals(route) {
        const matchPath = path_to_regexp_1.match(this._pathName, { decode: decodeURIComponent });
        const matched = Boolean(matchPath(route._pathName));
        if (matched && (route._method === this._method || this._method === contracts_1.Methods.ALL))
            return true;
        else
            return false;
    }
    params(pathName) {
        const matchPath = path_to_regexp_1.match(this._pathName, { decode: decodeURIComponent });
        const { params } = matchPath(pathName);
        return params;
    }
}
exports.Route = Route;
//# sourceMappingURL=route.js.map