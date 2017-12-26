import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeliveryBoysService {

  constructor(private http: HttpClient) { }
  public getAllDeliveryBoys(): Observable<any> { // Update structutre
    return this.http.get(CONFIG.urls.getDeliveryBoys)
      .map((res: any) => {
        return res;
      });
  }
}
