import { Controller, Methods } from '../contracts';
export declare class Route {
    private readonly _method;
    private readonly _pathName;
    private readonly _controller;
    constructor(method: Methods, pathName: string, controller: Controller);
    get controller(): Controller;
    equals(route: Route): boolean;
    params(pathName: string): any;
}
