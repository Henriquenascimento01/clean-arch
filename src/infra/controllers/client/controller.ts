import { HttpRequest, HttpResponse } from "../../web/http";

export interface Controller<Request, Response> {
  execute(request: HttpRequest<Request>): Promise<HttpResponse<Response>>;
}
