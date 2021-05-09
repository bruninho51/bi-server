"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor() {
        this.headers = [];
        this.headers['Content-Type'] = 'text/html';
    }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                statusCode: 200,
                body: httpRequest.body
            };
        });
    }
    render(view, data, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                statusCode,
                body: `@${view}`,
                data: data
            };
        });
    }
    json() {
        this.headers['Content-Type'] = 'application/json';
        return this;
    }
    response(statusCode, body, headers) {
        let response = {
            statusCode: statusCode,
            body,
            headers: Object.assign(Object.assign({}, this.headers), { headers })
        };
        if (response.headers['Content-Type'] === 'application/json') {
            response = Object.assign(Object.assign({}, response), { body: JSON.stringify(body) });
        }
        return response;
    }
    serverError(body, headers) {
        return this.response(500, body, headers);
    }
    badGateway(body, headers) {
        return this.response(502, body, headers);
    }
    ok(body, headers) {
        return this.response(200, body, headers);
    }
    notFound(body, headers) {
        return this.response(404, body, headers);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base-controller.js.map