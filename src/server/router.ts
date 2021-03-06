import { Controller, Methods } from "../contracts"
import { Route } from "../server/route"

export class Router {
    private readonly routes: any[] = []
    get(path: string, controller: Controller) {
        this.routes.push(new Route(Methods.GET, path, controller))
    }

    post(path: string, controller: Controller) {
        this.routes.push(new Route(Methods.GET, path, controller))
    }

    getRoutes(): Route[] {
        return this.routes;
    }
}