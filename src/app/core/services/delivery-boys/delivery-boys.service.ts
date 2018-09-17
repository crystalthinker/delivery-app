import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {NgForage, NgForageConfig} from "@ngforage/ngforage-ng4";

import 'rxjs/add/operator/map';

@Injectable()
export class DeliveryBoysService {
  public deliveryBoys:any;
  public online:any = window.navigator.onLine;

  constructor(private http: HttpClient,
              private readonly ngf: NgForage) {
     this.getNetworkStatus();
  }

  public getNetworkStatus() {
    setInterval(() => {
        this.online = window.navigator.onLine;
    }, 3000);
  }

  public getAllDeliveryBoys(): Promise<any> {
    const url = CONFIG.urls.getDeliveryBoys + '?_sort=id&_order=desc';
    let item = this.ngf.length();
    if(this.online === true) {
        return this.http.get(url)
          .toPromise()
          .then((res: any) => {
            this.ngf.setItem('deliveryBoys', res);
            return res;
        });
    } else {
        return this.ngf.getItem<any>('deliveryBoys');
    }
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

  public getId() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser.role = 'delivery_boy') {
          return currentUser.delivery_boy_Id;
      }
  }

  public getBoy(id): Observable<any> {
      const url = CONFIG.urls.getDeliveryBoys + '/' + id;
      return this.http.get(url)
                .map((res:any) => {
                    return res;
                });
  }

  public getBoyAssignments(id): Observable<any> {
      const url = `${CONFIG.urls.getDelivery}?delivery_boy_id=${id}`;
      return this.http.get(url)
        .map((res: any) => {
          return res;
        });
  }
}
