import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-delivery-create',
  templateUrl: './delivery-create.component.html',
  styleUrls: ['./delivery-create.component.scss']
})
export class DeliveryCreateComponent implements OnInit {
  deliveryForm: FormGroup;
  shops: any = [];
  selectedShop: object = {};
  constructor(private fb: FormBuilder, private service: DeliveryService, private shopService: ShopsService, private router: Router) {
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
    this.deliveryForm = this.fb.group({
      shop_id: ['', [Validators.required]],
    });
  }
  onShopChange(shopId) {
    if ( shopId ) {
      console.log('here', shopId);
    }

    // this.selectedShop = shop;
  }
  saveNewDelivery() {
      console.log(this.deliveryForm.value);
    // TODO Assign a delivery boy and create a delivery form format
    // this.service.addNewDeliveryBoy(this.deliveryForm.value).subscribe(res => {
      this.router.navigate(['/delivery/list']);
    // });
  }

}
