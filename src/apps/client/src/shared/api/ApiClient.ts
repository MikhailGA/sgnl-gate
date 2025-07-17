import { Configuration } from './generated';
import { UsersApi, AppApi, FoldersApi } from './generated/api';

class ApiClient {
  public userApi: UsersApi;
  public appApi: AppApi;
  public folderApi: FoldersApi;

  constructor(config?: Configuration) {
    this.appApi = new AppApi(config);
    this.userApi = new UsersApi(config);
    this.folderApi = new FoldersApi(config);
  }
}

export class Api {
  static instance: ApiClient;
  static setInstance(config?: Configuration) {
    this.instance = new ApiClient(config);
  }
}
