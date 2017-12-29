import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
      let url = CONFIG.urls.users+"?username="+username+"&password="+password;
      return this.http.get(url)
      .map((user: any) => {
        if(user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
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
}
