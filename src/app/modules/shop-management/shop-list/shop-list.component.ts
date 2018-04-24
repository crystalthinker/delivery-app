import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public shops: any = [];
  public tableColumn = [
      {field: 'name', header: 'Name'},
      {field: 'type', header: 'Type'},
      {field: 'phone', header: 'Phone'},
      {field: 'address', header: 'Address'},
      {field: 'pincode', header: 'Pincode'}
  ];

  constructor(private service: ShopsService,
              private router:Router
          ) { }

  ngOnInit() {
    this.service.getAllShops().then(shops => {
      this.shops = shops;
    });
  }

  public onRowSelect(event) {
      this.router.navigate([`/shops/detail/${event.data.id}`]);
  }

}
