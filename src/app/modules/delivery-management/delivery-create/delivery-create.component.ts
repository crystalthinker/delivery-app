import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {ShopsService} from '../../../core/services/shops/shops.service';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';

@Component({
  selector: 'app-delivery-create',
  templateUrl: './delivery-create.component.html',
  styleUrls: ['./delivery-create.component.scss']
})
export class DeliveryCreateComponent implements OnInit {
  deliveryForm: FormGroup;
  shops: any = [];
  selectedShop: any;
  constructor(private fb: FormBuilder,
              private service: DeliveryService,
              private shopService: ShopsService,
              private deliveryBoyservice: DeliveryBoysService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.shopService.getAllShops().subscribe(shops => {
      this.shops = shops;
    });
  }
  createForm() {
    /*    {
      "id": "1",
      "delivery_from": "vridhi",
      "shop_id": "1",
      "delivery_boy_id": "1",
      "delivery_to": {
        "customer_name": "",
        "address": "",
        "phone": ""
      },
      "delivery_boy_assigned": "Sebastin Eschweiler",
      "status": "Awaiting pickup"
    },*/
    const self = this;
    this.deliveryForm = this.fb.group({
      shop_id: ['', [Validators.required]],
      delivery_to: self.fb.group({
        customer_name: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    });
  }
  onShopChange(shopId) {
    if ( shopId ) {
      // TODO fetch hotel name and other details with id
       this.shopService.getAShop(shopId).subscribe(shop => {
        this.selectedShop = shop;
       });
    }
    // this.selectedShop = shop;
  }
  saveNewDelivery() {
        this.assignNewDeliveryBoy(this.deliveryForm.value);
  }
  assignNewDeliveryBoy(deliveryInfo: any) {
    // TODO update to flatmap/concat
     deliveryInfo.delivery_from = this.selectedShop.name;
    // TODO add logic. Temp check only available delivery boy and pincode check
    this.deliveryBoyservice.getFilteredDeliveryBoysList('available', this.selectedShop.pincode).subscribe(boys => {
       if ( boys.length > 0) {
         deliveryInfo.status = 'awaiting delivery boy confirmation';
         deliveryInfo.delivery_boy_assigned =  boys[0].name;
         deliveryInfo.delivery_boy_id = boys[0].id;
         let boyInfoUpdate = boys[0];
         boyInfoUpdate.status = 'engaged';
         this.deliveryBoyservice.updateDeliveryBoyStatus(boys[0].id, boyInfoUpdate).subscribe(result=>{
           this.service.addNewDelivery(deliveryInfo).subscribe(res => {
             this.router.navigate(['/delivery/list']);
           });
         });
         // change status of boy to engaged, awaiting delivery boy confirmation status of delivery
       }else {
         // status of delivery to pending
         deliveryInfo.status = 'pending';
         deliveryInfo.delivery_boy_assigned = '';
         deliveryInfo.delivery_boy_id = '';
         this.service.addNewDelivery(deliveryInfo).subscribe(res => {
           this.router.navigate(['/delivery/list']);
         });
       }
    });
  }
}
