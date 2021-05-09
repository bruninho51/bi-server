/// <reference types="node" />
import { Http2SecureServer, ServerHttp2Stream } from 'http2';
import { ServerOptions, TemplateEngine } from '../contracts';
import { Route } from '../server';
export declare class Server {
    private readonly http2;
    private readonly routes;
    private readonly genericServerError;
    private readonly notFoundServerError;
    readonly templateEngine: TemplateEngine | undefined;
    private readonly serverPushers;
    constructor(options?: Partial<ServerOptions>);
    listen(port: number): Http2SecureServer;
    findRoute(route: Route): Route;
    onConnect(stream: ServerHttp2Stream, headers: any): Promise<void>;
    _main: (stream: ServerHttp2Stream, headers: any) => Promise<void>;
}
