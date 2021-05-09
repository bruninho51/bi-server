import { HttpResponse } from '@/contracts/http-response';
import { HttpRequest } from '@/contracts/http-request';

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
