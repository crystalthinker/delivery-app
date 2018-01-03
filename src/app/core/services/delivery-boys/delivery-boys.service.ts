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

  public getFilteredDeliveryBoysList(status, pincode): Observable<any> {
    const url = `${CONFIG.urls.getDeliveryBoys}?status=${status}&pincode=${pincode}`;
    // Update structutre
    return this.http.get(url)
      .map((res: any) => {
        return res;
      });
  }

  public addNewDeliveryBoy(deliverBoyInfo): Observable<any> { // Update structutre
    return this.http.post(CONFIG.urls.getDeliveryBoys, deliverBoyInfo)
      .map((res: any) => {
        return res;
      });
  }
  public updateDeliveryBoyStatus(id, deliverBoyInfo): Observable<any> {
    // Update structutre
    const url = CONFIG.urls.getDeliveryBoys + '/' + id;
    return this.http.put(url, deliverBoyInfo)
      .map((res: any) => {
        return res;
      });
  }
}
