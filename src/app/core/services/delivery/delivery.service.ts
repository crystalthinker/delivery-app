import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DeliveryService {

  constructor(private http: HttpClient) { }
  public getAllDelivery(): Observable<any> {
    const url = CONFIG.urls.getDelivery + '?_sort=id&_order=desc';
    return this.http.get(url)
      .map((res: any) => {
        return res;
      });
  }

  public addNewDelivery(deliverInfo): Observable<any> {
    return this.http.post(CONFIG.urls.getDelivery, deliverInfo)
      .map((res: any) => {
        return res;
      });
  }
}
