import { Router } from '../server/router';
import { ServerPush, TemplateEngine, ServerError } from '../contracts';
export declare type ServerOptions = {
    key: string;
    cert: string;
    genericServerError: ServerError;
    notFoundServerError: ServerError;
    templateEngine?: TemplateEngine;
    serverPushers?: ServerPush[];
    router?: Router;
};
