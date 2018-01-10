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
  public loginActive: boolean = false;
  public subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
      this.isUserLoggedIn();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public isUserLoggedIn() {
      this.subscription = this.loginService.loginData
          .subscribe(role => {
              if(role === 'admin' || role === 'delivery_boy') {
                  this.loginActive = true;
              }
          });
      this.loginService.isLoggedIn() ? this.loginActive = true : this.loginActive = false;
  }

  public logOut() {
      this.loginService.logOutUser();
      this.loginActive = false;
      this.router.navigate(['login']);
  }

}
