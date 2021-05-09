import { Controller, HttpRequest, HttpResponse } from '@/contracts';
export declare class BaseController implements Controller {
    private headers;
    constructor();
    handle(httpRequest: HttpRequest): Promise<HttpResponse>;
    render(view: string, data: any, statusCode?: number): Promise<HttpResponse>;
    json(): BaseController;
    response(statusCode: number, body: any, headers?: any): {
        statusCode: number;
        body: any;
        headers: any;
    };
    serverError(body: any, headers?: any): HttpResponse;
    badGateway(body: any, headers?: any): HttpResponse;
    ok(body: any, headers?: any): HttpResponse;
    notFound(body: any, headers?: any): HttpResponse;
}
