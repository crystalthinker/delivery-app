import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {NgForage, NgForageConfig} from "@ngforage/ngforage-ng4";
import 'rxjs/add/operator/map';

@Injectable()
export class ShopsService {
  public online:any = window.navigator.onLine;

  constructor(private http: HttpClient, private readonly ngf: NgForage) {
      this.getNetworkStatus();
  }

  public getNetworkStatus() {
    setInterval(() => {
        this.online = window.navigator.onLine;
    }, 3000);
  }

  public getAllShops(): Promise<any> {
    const url = CONFIG.urls.getShops + '?_sort=id&_order=desc';
    if(this.online === true) {
        return this.http.get(url)
          .toPromise()
          .then((res: any) => {
            this.ngf.setItem('shops', res);
            return res;
        });
    } else {
        return this.ngf.getItem<any>('shops');
    }
  }

  public getAShop(id): Observable<any> {
    const url = CONFIG.urls.getShops + '/' + id;
    // Update structutre
    return this.http.get(url)
      .map((res: any) => {
        return res;
      });
  }
  public addNewShop(shopInfo): Observable<any> { // Update structutre
    return this.http.post(CONFIG.urls.getShops, shopInfo)
      .map((res: any) => {
        return res;
      });
  }

  public updateShop(id, updateStatus): Observable<any> {
      const url = CONFIG.urls.getShops + '/' + id;
      return this.http.put(url, updateStatus)
        .map((res: any) => {
          return res;
        });
  }
}
