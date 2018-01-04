import {Component, OnInit} from '@angular/core';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';
import {LoginService} from '../../core/services/login/login.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
    // .filter((evt) => evt instanceof NavigationStart || evt instanceof NavigationEnd)
    router.events
      .subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          console.log(evt.url);
          if (evt.url === '/') {
            this.checkUserRole();
          }
        }
      });
  }

  ngOnInit() {
  }

  public checkUserRole() {
    const user = this.loginService.currentUser();
    if (user.role === 'admin') {
      this.router.navigate(['/dashboard']);
    } else if (user.role === 'delivery-boys') {
      this.router.navigate(['/deliveryboy-dashboard']);
    }
  }
}
