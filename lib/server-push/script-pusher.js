"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptPusher = void 0;
const http2_1 = require("http2");
const NGHTTP2_REFUSED_STREAM = http2_1.constants.NGHTTP2_REFUSED_STREAM;
class ScriptPusher {
    pushAssets(stream, contentBody) {
        // eslint-disable-next-line no-useless-escape
        const regexScript = /src=\"(.*?)\"/g;
        const assetsUrlsScript = contentBody.match(regexScript);
        let filteredUrlsScript;
        if (assetsUrlsScript && assetsUrlsScript.length > 0)
            filteredUrlsScript = assetsUrlsScript.map(e => {
                const url = e.substring(5, e.length - 1);
                if (url.substring(0, 4) === 'http')
                    return undefined;
                else
                    return url;
            }).filter(e => e);
        if (filteredUrlsScript)
            filteredUrlsScript.forEach(assetUrl => {
                stream.pushStream({ ':path': assetUrl === null || assetUrl === void 0 ? void 0 : assetUrl.substring(1, assetUrl.length) }, (err, localStream) => {
                    if (err)
                        throw err;
                    localStream.respondWithFile(assetUrl, {
                        'status': 200,
                    });
                    localStream.on('error', (err) => {
                        const isRefusedStream = err.code === 'ERR_HTTP2_STREAM_ERROR' &&
                            localStream.rstCode === NGHTTP2_REFUSED_STREAM;
                        if (!isRefusedStream)
                            throw err;
                    });
                });
            });
    }
}
exports.ScriptPusher = ScriptPusher;
//# sourceMappingURL=script-pusher.js.map