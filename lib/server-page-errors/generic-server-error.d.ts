/// <reference types="node" />
import { ServerHttp2Stream } from 'http2';
import { ServerError } from '../contracts';
export declare class GenericServerError implements ServerError {
    handle(stream: ServerHttp2Stream, err: Error): void;
}
