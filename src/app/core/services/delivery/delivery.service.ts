import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {NgForage, NgForageConfig} from "@ngforage/ngforage-ng4";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeliveryService {
  public online:any = window.navigator.onLine;

  constructor(private http: HttpClient, private readonly ngf: NgForage) {
      this.getNetworkStatus();
  }

  public getNetworkStatus() {
    setInterval(() => {
        this.online = window.navigator.onLine;
    }, 3000);
  }

  public getAllDelivery(): Promise<any> {
    const url = CONFIG.urls.getDelivery + '?_sort=id&_order=desc';
    if(this.online === true) {
        return this.http.get(url)
          .toPromise()
          .then((res: any) => {
            this.ngf.setItem('delivery', res);
            return res;
        });
    } else {
        return this.ngf.getItem<any>('delivery');
    }
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
