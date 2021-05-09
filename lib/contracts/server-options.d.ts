/// <reference types="node" />
import { Router } from '@/server/router';
import { ServerPush, TemplateEngine, ServerError } from '@/contracts';
export declare type ServerOptions = {
    key: Buffer;
    cert: Buffer;
    genericServerError: ServerError;
    notFoundServerError: ServerError;
    templateEngine?: TemplateEngine;
    serverPushers?: ServerPush[];
    router?: Router;
};
