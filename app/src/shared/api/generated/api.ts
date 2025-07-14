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
 * AppControllerApi - fetch parameter creator
 * @export
 */
export const AppControllerApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getHello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/api/app`;
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
 * AppControllerApi - functional programming interface
 * @export
 */
export const AppControllerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary getHello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: any): Promise<(basePath?: string) => Promise<string>> {
            const localVarFetchArgs = await AppControllerApiFetchParamCreator(configuration).appControllerGetHello(options);
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
    }
};

/**
 * AppControllerApi - factory interface
 * @export
 */
export const AppControllerApiFactory = function (configuration?: Configuration, basePath?: string) {
    return {
        /**
         * 
         * @summary getHello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: any) {
            return (await AppControllerApiFp(configuration).appControllerGetHello(options))(basePath);
        },
    };
};

/**
 * AppControllerApi - object-oriented interface
 * @export
 * @class AppControllerApi
 * @extends {BaseAPI}
 */
export class AppControllerApi extends BaseAPI {
    /**
     * 
     * @summary getHello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppControllerApi
     */
    public async getHello(options?: any) {
        return (await AppControllerApiFp(this.configuration).appControllerGetHello(options))(this.basePath);
    }

}
