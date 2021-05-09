import { HttpResponse, HttpRequest } from '@/contracts';
export interface Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
