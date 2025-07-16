/* tslint:disable */
/* eslint-disable */


import * as url from "url";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration?: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name!: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * User name
     * @type {string}
     * @memberof CreateUserDto
     */
    name: string;
    /**
     * User email
     * @type {string}
     * @memberof CreateUserDto
     */
    email: string;
    /**
     * User age
     * @type {number}
     * @memberof CreateUserDto
     */
    age?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * Database status
     * @type {string}
     * @memberof InlineResponse200
     */
    database?: string;
    /**
     * Check timestamp
     * @type {string}
     * @memberof InlineResponse200
     */
    timestamp?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * Total number of users
     * @type {number}
     * @memberof InlineResponse2001
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique user identifier
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * User name
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * User email
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * User age
     * @type {number}
     * @memberof User
     */
    age?: number;
    /**
     * Record creation date
     * @type {Date}
     * @memberof User
     */
    createdAt: Date;
    /**
     * Last update date
     * @type {Date}
     * @memberof User
     */
    updatedAt: Date;
}
/**
 * AppApi - fetch parameter creator
 * @export
 */
export const AppApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary checkDatabase
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerCheckDatabase(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/api/health/database`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary getData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/api`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AppApi - functional programming interface
 * @export
 */
export const AppApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary checkDatabase
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerCheckDatabase(options?: any): Promise<(basePath?: string) => Promise<InlineResponse200>> {
            const localVarFetchArgs = await AppApiFetchParamCreator(configuration).appControllerCheckDatabase(options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary getData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: any): Promise<(basePath?: string) => Promise<Response>> {
            const localVarFetchArgs = await AppApiFetchParamCreator(configuration).appControllerGetData(options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AppApi - factory interface
 * @export
 */
export const AppApiFactory = function (configuration?: Configuration, basePath?: string) {
    return {
        /**
         * 
         * @summary checkDatabase
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerCheckDatabase(options?: any) {
            return (await AppApiFp(configuration).appControllerCheckDatabase(options))(basePath);
        },
        /**
         * 
         * @summary getData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: any) {
            return (await AppApiFp(configuration).appControllerGetData(options))(basePath);
        },
    };
};

/**
 * AppApi - object-oriented interface
 * @export
 * @class AppApi
 * @extends {BaseAPI}
 */
export class AppApi extends BaseAPI {
    /**
     * 
     * @summary checkDatabase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppApi
     */
    public async checkDatabase(options?: any) {
        return (await AppApiFp(this.configuration).appControllerCheckDatabase(options))(this.basePath);
    }

    /**
     * 
     * @summary getData
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppApi
     */
    public async getData(options?: any) {
        return (await AppApiFp(this.configuration).appControllerGetData(options))(this.basePath);
    }

}
/**
 * UsersApi - fetch parameter creator
 * @export
 */
export const UsersApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary create
         * @param {CreateUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreate(body: CreateUserDto, options: any = {}): Promise<FetchArgs> {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userControllerCreate.');
            }
            const localVarPath = `/api/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // bearerAuth required
            if (configuration && configuration.accessToken) {
			    const localVarAccessTokenValue = await configuration.accessToken("bearer", []);
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"CreateUserDto" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary findAll
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindAll(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/api/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // bearerAuth required
            if (configuration && configuration.accessToken) {
			    const localVarAccessTokenValue = await configuration.accessToken("bearer", []);
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary findOne
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindOne(id: number, options: any = {}): Promise<FetchArgs> {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userControllerFindOne.');
            }
            const localVarPath = `/api/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // bearerAuth required
            if (configuration && configuration.accessToken) {
			    const localVarAccessTokenValue = await configuration.accessToken("bearer", []);
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary getCount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetCount(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/api/users/stats/count`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // bearerAuth required
            if (configuration && configuration.accessToken) {
			    const localVarAccessTokenValue = await configuration.accessToken("bearer", []);
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary remove
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerRemove(id: number, options: any = {}): Promise<FetchArgs> {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userControllerRemove.');
            }
            const localVarPath = `/api/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // bearerAuth required
            if (configuration && configuration.accessToken) {
			    const localVarAccessTokenValue = await configuration.accessToken("bearer", []);
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            // @ts-ignore
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary create
         * @param {CreateUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreate(body: CreateUserDto, options?: any): Promise<(basePath?: string) => Promise<User>> {
            const localVarFetchArgs = await UsersApiFetchParamCreator(configuration).userControllerCreate(body, options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary findAll
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindAll(options?: any): Promise<(basePath?: string) => Promise<Array<User>>> {
            const localVarFetchArgs = await UsersApiFetchParamCreator(configuration).userControllerFindAll(options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary findOne
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindOne(id: number, options?: any): Promise<(basePath?: string) => Promise<User>> {
            const localVarFetchArgs = await UsersApiFetchParamCreator(configuration).userControllerFindOne(id, options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary getCount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetCount(options?: any): Promise<(basePath?: string) => Promise<InlineResponse2001>> {
            const localVarFetchArgs = await UsersApiFetchParamCreator(configuration).userControllerGetCount(options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary remove
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerRemove(id: number, options?: any): Promise<(basePath?: string) => Promise<Response>> {
            const localVarFetchArgs = await UsersApiFetchParamCreator(configuration).userControllerRemove(id, options);
            return (basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string) {
    return {
        /**
         * 
         * @summary create
         * @param {CreateUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreate(body: CreateUserDto, options?: any) {
            return (await UsersApiFp(configuration).userControllerCreate(body, options))(basePath);
        },
        /**
         * 
         * @summary findAll
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindAll(options?: any) {
            return (await UsersApiFp(configuration).userControllerFindAll(options))(basePath);
        },
        /**
         * 
         * @summary findOne
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerFindOne(id: number, options?: any) {
            return (await UsersApiFp(configuration).userControllerFindOne(id, options))(basePath);
        },
        /**
         * 
         * @summary getCount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetCount(options?: any) {
            return (await UsersApiFp(configuration).userControllerGetCount(options))(basePath);
        },
        /**
         * 
         * @summary remove
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerRemove(id: number, options?: any) {
            return (await UsersApiFp(configuration).userControllerRemove(id, options))(basePath);
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary create
     * @param {CreateUserDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async create(body: CreateUserDto, options?: any) {
        return (await UsersApiFp(this.configuration).userControllerCreate(body, options))(this.basePath);
    }

    /**
     * 
     * @summary findAll
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async findAll(options?: any) {
        return (await UsersApiFp(this.configuration).userControllerFindAll(options))(this.basePath);
    }

    /**
     * 
     * @summary findOne
     * @param {number} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async findOne(id: number, options?: any) {
        return (await UsersApiFp(this.configuration).userControllerFindOne(id, options))(this.basePath);
    }

    /**
     * 
     * @summary getCount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getCount(options?: any) {
        return (await UsersApiFp(this.configuration).userControllerGetCount(options))(this.basePath);
    }

    /**
     * 
     * @summary remove
     * @param {number} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async remove(id: number, options?: any) {
        return (await UsersApiFp(this.configuration).userControllerRemove(id, options))(this.basePath);
    }

}
