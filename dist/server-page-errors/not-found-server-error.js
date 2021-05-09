"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundServerError = void 0;
class NotFoundServerError {
    handle(stream) {
        stream.respond({
            'content-type': 'text/html; charset=utf-8',
            ':status': 404
        });
        stream.end('<pre><h1>Not Found</h1></pre>');
    }
}
exports.NotFoundServerError = NotFoundServerError;
//# sourceMappingURL=not-found-server-error.js.map