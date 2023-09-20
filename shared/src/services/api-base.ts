import Http from './http-base';

export class BaseApi {
  private _http: Http;

  constructor(protected baseUrl: string) {
    this._http = new Http(baseUrl);
  }

  get http() {
    return this._http;
  }
}
