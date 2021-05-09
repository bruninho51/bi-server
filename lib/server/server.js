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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const url_1 = __importDefault(require("url"));
const assert_1 = __importDefault(require("assert"));
const http2_1 = __importDefault(require("http2"));
const server_1 = require("@/server");
const errors_1 = require("@/errors");
const config_1 = require("@/config");
class Server {
    constructor(options) {
        this._main = (stream, headers) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.onConnect(stream, headers);
            }
            catch (err) {
                if (err instanceof errors_1.NotFoundError) {
                    this.notFoundServerError.handle(stream, err);
                }
                else {
                    this.genericServerError.handle(stream, err);
                }
            }
        });
        const opt = config_1.makeServerOptions(options);
        this.http2 = http2_1.default.createSecureServer(options);
        this.routes = opt.router.getRoutes();
        this.genericServerError = opt.genericServerError;
        this.notFoundServerError = opt.notFoundServerError;
        this.templateEngine = opt.templateEngine;
        this.serverPushers = opt.serverPushers;
    }
    listen(port) {
        this.http2.on('stream', this._main);
        this.http2.listen(port);
        return this.http2;
    }
    findRoute(route) {
        const foundRoute = this.routes.find((fRoute) => {
            if (fRoute.equals(route))
                return true;
            else
                return false;
        });
        if (foundRoute)
            return foundRoute;
        else
            throw new errors_1.NotFoundError();
    }
    onConnect(stream, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = headers[':method'];
            const { query, pathname } = url_1.default.parse(headers[':path'], true);
            assert_1.default(pathname);
            const body = yield new Promise((resolve) => {
                let result = '';
                stream.on('data', chunk => {
                    result += chunk;
                });
                stream.on('end', () => {
                    const data = result ? JSON.parse(result) : null;
                    resolve(data);
                });
            });
            const route = this.findRoute(new server_1.Route(method, pathname, new server_1.BaseController()));
            const httpRequest = {
                headers: headers,
                body,
                params: route.params(pathname),
                query: query
            };
            const httpResponse = yield route.controller.handle(httpRequest);
            if (this.templateEngine) {
                httpResponse.body = yield this.templateEngine.render(httpResponse.body, httpResponse.data);
                if (this.serverPushers) {
                    this.serverPushers.forEach(pusher => pusher.pushAssets(stream, httpResponse.body));
                }
            }
            stream.respond(Object.assign({ 'Content-Type': 'text/html; charset=utf-8', ':status': httpResponse.statusCode }, httpResponse.headers));
            stream.end(httpResponse.body);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map