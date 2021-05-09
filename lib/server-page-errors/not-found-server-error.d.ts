/// <reference types="node" />
import { ServerHttp2Stream } from 'http2';
import { ServerError } from '../contracts';
export declare class NotFoundServerError implements ServerError {
    handle(stream: ServerHttp2Stream): void;
}
