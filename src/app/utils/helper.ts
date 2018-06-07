import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { API_ERROR } from './api-error.const';

@Injectable()
export class Helper {
    public api(path) {
        return environment.apiBaseUrl + '/' + path;
    }

    public error(id) {
        return API_ERROR.get(id);
    }

    public asset(path) {
        return environment.baseUrl + '/' + path;
    }
}
