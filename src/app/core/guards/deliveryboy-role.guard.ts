import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {LoginService} from '../services/login/login.service';

@Injectable()
export class DeliveryboyRoleGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {};

  canActivate() {
      return this.service.isDeliveryBoy() ? true : this.router.navigate(['/login']);
  }
}
