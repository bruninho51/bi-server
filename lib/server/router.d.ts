import { Controller } from "../contracts";
import { Route } from "../server/route";
export declare class Router {
    private readonly routes;
    get(path: string, controller: Controller): void;
    post(path: string, controller: Controller): void;
    getRoutes(): Route[];
}
