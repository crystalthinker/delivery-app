import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../../../core/services/login/login.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public currentUser: any;
  public userLocked: any;
  public updatedUser: any;
  constructor(private service: LoginService) { }

  ngOnInit() {
      this.getCurrentUser();
  }

  ngOnDestroy() {
    this.updatedUser = {
        "currentUser": null,
        "id": 1
    }
    this.service.updateCurrentUser(this.updatedUser)
        .subscribe((item) => {

        });
  }

  public getCurrentUser() {
      return this.service.checkCurrentUser()
        .subscribe(item => {
            this.userLocked = item.currentUser;
            if(!this.userLocked) {
                this.saveUser();
            }
        });
  }

  public saveUser() {
      let localUser = this.service.getCurrentUser();
      this.updatedUser = {
          "currentUser": localUser.username,
          "id": 1
      }
      this.service.updateCurrentUser(this.updatedUser)
          .subscribe((item) => {

          })
  }

}
