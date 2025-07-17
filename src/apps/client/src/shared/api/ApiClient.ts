import { Configuration } from './generated';
import { UsersApi, AppApi, FoldersApi } from './generated/api';

class ApiClient {
  public userApi: UsersApi;
  public appApi: AppApi;
  public folderApi: FoldersApi;

  constructor(config?: Configuration, basePath?: string) {
    this.appApi = new AppApi(config, basePath);
    this.userApi = new UsersApi(config, basePath);
    this.folderApi = new FoldersApi(config, basePath);
  }
}

export class Api {
  static instance: ApiClient;
  static setInstance(basePath?: string) {
    this.instance = new ApiClient(undefined, basePath);
  }
}
