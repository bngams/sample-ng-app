import { Injectable } from '@angular/core';
import { Helper } from '../utils/helper';
import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

  constructor(private helper: Helper, private http: Http) {
    console.log(helper.api('test'));
  }

  fetchCity(name): Promise<any> {
    return this.http.get(this.helper.api('cities?name=' + name))
      .toPromise()
      .then((response) => {
        console.log(response.json());
        return Promise.resolve(response.json());
      })
      .catch((error) => {
        return Promise.reject(error.message || this.helper.error(error.json().id));
      });

  }

  private handleError(error: any, redirectUrl?: string): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error.json());
  }
}
