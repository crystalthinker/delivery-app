import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private itemValue = new BehaviorSubject<any>(0);
  public loginData = this.itemValue.asObservable();
  public currentUser: any;

  constructor(private http: HttpClient) { }

  public emitLoggedInRole(value) {
      this.itemValue.next(value);
  }

  public getCurrentUser() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return this.currentUser;
  }

  public login(username: string, password: string) {
      let url = CONFIG.urls.users+"?username="+username+"&password="+password;
      return this.http.get(url)
      .map((user: any) => {
        if(user.length > 0) {
            localStorage.setItem('currentUser', JSON.stringify(user[0]));
        }
        return user[0];
      });
  }

  public isLoggedIn() {
      this.getCurrentUser();
      if(this.currentUser)
        return this.currentUser.role.length > 0 ? true : false;
  }

  public isAdmin() {
      this.getCurrentUser();
      if(this.currentUser)
        return this.currentUser.role === 'admin' ? true : false;
  }

  public isDeliveryBoy() {
      this.getCurrentUser();
      if(this.currentUser)
        return this.currentUser.role === 'delivery_boy' ? true : false;
  }

  public logOutUser() {
      if(localStorage.getItem('currentUser') !== null)
        localStorage.removeItem('currentUser');
  }

}
