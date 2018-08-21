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
  public deliveryBoyData: any;
  public available: boolean = true;
  public unavailable: boolean = false;

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
          this.deliveryBoyData = data;
          if(data.status === 'unavailable') {
              this.unavailable = true;
              this.available = false;
          }
      });
  }

  public getDeliveryBoyId() {
      this.id = this.service.getId();
  }

  public onAvailable() {
      this.available = true;
      this.unavailable = false;
      this.deliveryBoyData.status = 'available';
      this.service.updateDeliveryBoyStatus(this.id, this.deliveryBoyData)
          .subscribe((result) => {
              if(result) {
                  this.getProfileData();
              }
          })
  }

  public onUnAvailable() {
      this.unavailable = true;
      this.available = false;
      this.deliveryBoyData.status = 'unavailable';
      this.service.updateDeliveryBoyStatus(this.id, this.deliveryBoyData)
          .subscribe((result) => {
              if(result) {
                  this.getProfileData();
              }
          })
  }

}
