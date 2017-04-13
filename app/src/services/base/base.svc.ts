import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;
    static timeout = 8000;
    static host: string = 'http://shipt-pizza-api.herokuapp.com/api/v1';

    endpoint: string = '';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get(path?: string): async.IAjaxThenable<any> {
        return this.json({
            method: 'GET',
            url: `${BaseService.host}/${this.endpoint}${this.formatPath(path)}`
        });
    }

    json(options?: async.IHttpConfig): async.IAjaxThenable<any> {
        this.utils.extend(options, {
            timeout: BaseService.timeout,
            headers: {
                'Accept': 'application/json'
            }
        });

        return this.http.json(options).then(this.handleResponse, this.handleError.bind(this));
    }

    formatPath(path: string) {
        if (this.utils.isEmpty(path)) {
            return '';
        } else {
            return '/' + path;
        }
    }

    handleResponse(result: async.IAjaxResponse<any>) {
        return result.response;
    }

    handleError(error: async.AjaxError) {
        throw error.response;
    }

    test() {
        console.log(BaseService.host);
    }
}
