import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';
import {ShopsService} from '../../../core/services/shops/shops.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliveryboy-details',
  templateUrl: './deliveryboy-details.component.html',
  styleUrls: ['./deliveryboy-details.component.scss']
})
export class DeliveryboyDetailsComponent implements OnInit {
  public deliveryId: any;
  public deliveryData: any;
  public deliveryBoyId: number;
  public deliveryBoyData: any;
  public dataSet: any;
  public shopId: number;
  public shopName: string;
  public shopAddress: string;
  public shopPhone: number;
  public shopPincode: number;
  public name: string;
  public phone: number;
  public address: string;
  public pincode: number;
  public statusAwaiting: boolean = false;
  public statusPickUp: boolean = false;
  public statusInProgress: boolean = false;
  public statusCompleted: boolean = false;
  public statusPending: boolean = false;

  constructor(private route:ActivatedRoute,
              private deliveryService:DeliveryService,
              private deliveryBoysService:DeliveryBoysService,
              private shopsService: ShopsService,
              private location:Location,
              private router:Router
          ) { }

  ngOnInit() {
      this.getDeliveryId();
      this.getDeliveryDetails();
      this.getDeliveryBoyId();
      this.getBoyDetailsById();
  }

  public getDeliveryBoyId() {
      this.deliveryBoyId = this.deliveryBoysService.getId();
  }

  public getBoyDetailsById() {
      this.deliveryBoysService.getBoy(this.deliveryBoyId)
          .subscribe((data) => this.deliveryBoyData = data);
  }

  public getDeliveryId() {
      this.deliveryId = this.route.snapshot.paramMap.get('id');
  }

  public getDeliveryDetails() {
      let items;
      let status;
      this.deliveryService.getDeliveryById(this.deliveryId)
          .subscribe((deliveryData) => {
              this.deliveryData = deliveryData;
              this.dataSet = deliveryData.delivery_to;
              this.name = this.dataSet.customer_name;
              this.address = this.dataSet.address;
              this.phone = this.dataSet.phone;
              this.pincode = this.dataSet.pincode;
              status = deliveryData.status;
              this.shopId = deliveryData.shop_id;
              this.getShopDetailsById();
              if(status == 'Awaiting Confirmation') {
                  this.statusAwaiting = true;
              } else if(status == 'Awaiting Pickup') {
                  this.statusPickUp = true;
              } else if(status == 'Out For Delivery') {
                  this.statusInProgress = true;
              } else if(status == 'pending') {
                  this.statusPending = true;
              } else {
                  this.statusCompleted = true;
              }
          })
  }

  public getShopDetailsById() {
      this.shopsService.getAShop(this.shopId)
          .subscribe((data) => {
              this.shopName = data.name;
              this.shopAddress = data.address;
              this.shopPhone = data.phone;
              this.shopPincode = data.pincode;
          });
  }

  public acceptJob() {
      //ready for pickup, change delivery status
      this.statusAwaiting = false;
      this.statusPickUp = true;
      this.deliveryData.status = 'Awaiting Pickup';
      this.deliveryService.changeDeliveryStatus(this.deliveryId, this.deliveryData)
        .subscribe((result) => {
            if(result) {
                setTimeout(() => this.router.navigate(['/']), 1000);
            }
        });
  }

  public denyJob() {
      //status unavilable, change delivery boy status
      this.statusAwaiting = false;
      this.statusPending = true;
      this.deliveryData.status = 'pending';
      this.deliveryBoyData.status = 'unavailable';
      this.deliveryService.changeDeliveryStatus(this.deliveryId, this.deliveryData)
          .subscribe((result) => {
              if(result) {
                  console.log(result);
              }
          });
      this.deliveryBoysService.updateDeliveryBoyStatus(this.deliveryBoyId, this.deliveryBoyData)
          .subscribe((result) => {
              if(result) {
                  setTimeout(() => this.router.navigate(['/']), 1000);
              }
          });
  }

  public confirmPickUp() {
      //confirm pickup from store
      this.statusPickUp = false;
      this.statusInProgress = true;
      this.deliveryData.status = 'Out For Delivery';
      this.deliveryService.changeDeliveryStatus(this.deliveryId, this.deliveryData)
          .subscribe((result) => {
              if(result) {
                  setTimeout(() => this.router.navigate(['/']), 1000);
              }
          });
  }

  public confrimDelivered() {
      //delivery Confirmation
      this.statusInProgress = false;
      this.statusCompleted = true;
      this.deliveryData.status = 'Delivered';
      this.deliveryService.changeDeliveryStatus(this.deliveryId, this.deliveryData)
          .subscribe((result) => {
              if(result) {
                   setTimeout(() => this.router.navigate(['/']), 1000);
              }
          });
  }

  public goBack() {
      this.location.back();
  }

}
