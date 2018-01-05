import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  public getDeliveryById(id: number): Observable<any> {
      const url = `${CONFIG.urls.getDelivery}/${id}`;
      return this.http.get(url)
        .map((res: any) => {
            return res;
        });
  }

  public changeDeliveryStatus(id: number, deliveryStatus): Observable<any> {
      const url = CONFIG.urls.getDelivery + '/' + id;
      return this.http.put(url, deliveryStatus)
        .map((res: any) => {
          return res;
        });
  }
}
