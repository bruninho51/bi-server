"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericServerError = void 0;
class GenericServerError {
    handle(stream, err) {
        stream.respond({
            'content-type': 'text/html; charset=utf-8',
            ':status': 500
        });
        stream.end('<pre><h1>Internal Server Error</h1></pre>');
    }
}
exports.GenericServerError = GenericServerError;
//# sourceMappingURL=generic-server-error.js.map