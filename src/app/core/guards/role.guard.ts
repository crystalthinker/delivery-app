import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {LoginService} from '../services/login/login.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {};

  canActivate() {
      if(this.service.checkUser()) {
          return true;
      } else {
          this.router.navigate(['/login']);
      }
  }
}
