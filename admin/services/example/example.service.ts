import { BaseApi } from '@shared/services';

export class ExampleService extends BaseApi {
  constructor() {
    super('https://example.com');
  }

  exampleService = () => {
    return this.http.get('/example');
  };
}
