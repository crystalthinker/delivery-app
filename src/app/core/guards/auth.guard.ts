import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import {LoginService} from '../services/login/login.service';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(private service: LoginService, private router: Router) {};

  canActivateChild() {
      if(this.service.checkUser()) {
          return true;
      } else {
          this.router.navigate(['/login']);
      }
  }
}
