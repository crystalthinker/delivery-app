import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  shops: any = [];
  headerData: any = ['Name',
    'Type',
    'Phone',
    'Address',
    'Pincode'];
  listKeys: any = ['name', 'type', 'phone', 'address', 'pincode'];
  constructor(private service: ShopsService,
              private router:Router
          ) { }

  ngOnInit() {
    this.service.getAllShops().subscribe(shops => {
      this.shops = shops;
    });
  }

  public onClick(id: any) {
      this.router.navigate([`/shops/detail/${id}`]);
  }

}
