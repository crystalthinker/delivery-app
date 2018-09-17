import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../services/login/login.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LockGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {};

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.checkCurrentUser().map((item) => {
        let currentUser = this.service.getCurrentUser();
        if(item.currentUser === currentUser.username || item.currentUser === null) {
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    })
  }
}
