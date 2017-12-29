import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  shops: any = [];
  constructor(private service: ShopsService) { }

  ngOnInit() {
    this.service.getAllShops().subscribe(shops => {
      this.shops = shops;
    });
  }
}
