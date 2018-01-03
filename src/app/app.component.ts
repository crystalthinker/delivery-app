import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from './core/services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'ABC Delivery';
  public checkLogin: boolean = false;
  public subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
      this.isUserLoggedIn();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public isUserLoggedIn() {
      this.subscription = this.loginService.checkLogin
          .subscribe(role => {
              if(role == 'admin' || role == 'delivery_boy') {
                  this.checkLogin = true;
              }
          });
      if(this.loginService.isLoggedIn()) {
          this.checkLogin = true;
      }
  }

  public logOut() {
      this.loginService.logOutUser();
      this.checkLogin = false;
      this.router.navigate(['login']);
  }

}
