import { Configuration } from './generated';
import { UsersApi, AppApi } from './generated/api';

class ApiClient {
  public userApi: UsersApi;
  public appApi: AppApi;

  constructor(config?: Configuration) {
    this.appApi = new AppApi(config);
    this.userApi = new UsersApi(config);
  }
}

export class Api {
  static instance: ApiClient;
  static setInstance(config?: Configuration) {
    this.instance = new ApiClient(config);
  }
}
