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
exports.EjsTemplateEngine = void 0;
const util_1 = require("util");
const ejs_1 = require("ejs");
const path_1 = __importDefault(require("path"));
class EjsTemplateEngine {
    constructor(options) {
        this.ejsRender = util_1.promisify(ejs_1.renderFile);
        this.options = options;
    }
    render(view, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isValid(view)) {
                const { dir, ext } = this.options;
                const viewPath = path_1.default.join(dir, `${view.substring(1)}.${ext}`);
                const html = yield this.ejsRender(viewPath, data);
                return html;
            }
            return view;
        });
    }
    isValid(view) {
        return typeof view === 'string' && /^@/.test(view);
    }
}
exports.EjsTemplateEngine = EjsTemplateEngine;
//# sourceMappingURL=ejs-template-engine.js.map