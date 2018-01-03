import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private itemValue = new BehaviorSubject<any>(0);
  public checkLogin = this.itemValue.asObservable();

  constructor(private http: HttpClient) { }

  public emitCheckLoggedIn(value) {
      this.itemValue.next(value);
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
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser) {
          return true;
      } else {
          return false;
      }
  }

  public checkUser() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser.role == 'admin') {
          return true;
      } else {
          return false;
      }
  }

  public deliveryBoyRole() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser.role == 'delivery_boy') {
          return true;
      } else {
          return false;
      }
  }

  public logOutUser() {
      if(localStorage.getItem('currentUser') !== null) {
          localStorage.removeItem('currentUser');
      }
  }

  public currentUser() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser;
  }
}
