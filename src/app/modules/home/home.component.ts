import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';
import {LoginService} from '../../core/services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
      this.checkUserRole();
  }

  public checkUserRole() {
     let user = this.loginService.currentUser();
     if(user.role == 'admin') {
         this.router.navigate(['/dashboard']);
     } else if(user.role == 'delivery-boys') {
         this.router.navigate(['/deliveryboy-dashboard']);
     }
  }
}
