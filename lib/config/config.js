"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeServerOptions = exports.defaultServerOptions = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const generic_server_error_1 = require("../server-page-errors/generic-server-error");
const not_found_server_error_1 = require("../server-page-errors/not-found-server-error");
const style_pusher_1 = require("../server-push/style-pusher");
const script_pusher_1 = require("../server-push/script-pusher");
const template_engine_1 = require("../template-engine");
exports.defaultServerOptions = {
    key: fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'ssl', 'privkey.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'ssl', 'cert.pem')),
    genericServerError: new generic_server_error_1.GenericServerError(),
    notFoundServerError: new not_found_server_error_1.NotFoundServerError(),
    templateEngine: new template_engine_1.EjsTemplateEngine({
        dir: path_1.default.join(process.cwd(), 'views'),
        ext: 'ejs'
    }),
    serverPushers: [new script_pusher_1.ScriptPusher(), new style_pusher_1.StylePusher()]
};
exports.makeServerOptions = (config) => {
    return Object.assign(Object.assign({}, exports.defaultServerOptions), config);
};
//# sourceMappingURL=config.js.map