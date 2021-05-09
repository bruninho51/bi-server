"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylePusher = void 0;
const http2_1 = require("http2");
const NGHTTP2_REFUSED_STREAM = http2_1.constants.NGHTTP2_REFUSED_STREAM;
class StylePusher {
    pushAssets(stream, contentBody) {
        // eslint-disable-next-line no-useless-escape
        const regex = /href=\"(.*?)\"/g;
        const assetsUrls = contentBody.match(regex);
        let filteredUrls;
        if (assetsUrls && assetsUrls.length > 0)
            filteredUrls = assetsUrls.map(e => {
                const url = e.substring(6, e.length - 1);
                if (url.substring(0, 4) === 'http')
                    return undefined;
                else
                    return url;
            }).filter(e => e);
        if (filteredUrls)
            filteredUrls.forEach(assetUrl => {
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
exports.StylePusher = StylePusher;
//# sourceMappingURL=style-pusher.js.map