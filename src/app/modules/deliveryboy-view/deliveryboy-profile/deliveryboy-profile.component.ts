import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service'

@Component({
  selector: 'app-deliveryboy-profile',
  templateUrl: './deliveryboy-profile.component.html',
  styleUrls: ['./deliveryboy-profile.component.scss']
})
export class DeliveryboyProfileComponent implements OnInit {
  public id: number;
  public name: string;
  public email: string;
  public phone: number;
  public status: string;
  public pincode: number;

  constructor(private service:DeliveryBoysService) { }

  ngOnInit() {
      this.getDeliveryBoyId();
      this.getProfileData();
  }

  public getProfileData() {
      this.service.getBoy(this.id)
      .subscribe((data) => {
          this.name = data.name;
          this.email = data.email;
          this.phone = data.phone;
          this.status = data.status;
          this.pincode = data.pincode;
      });
  }

  public getDeliveryBoyId() {
      this.id = this.service.getId();
  }

}
