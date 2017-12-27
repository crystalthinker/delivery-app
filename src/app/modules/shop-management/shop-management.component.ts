import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';
import {ShopsService} from '../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss']
})
export class ShopManagementComponent implements OnInit {
  shops: any = [];
  constructor(private service: ShopsService) { }

  ngOnInit() {
    this.service.getAllShops().subscribe(shops => {
      this.shops = shops;
    });
  }

}
