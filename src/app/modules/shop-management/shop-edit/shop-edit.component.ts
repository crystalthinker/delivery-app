import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
  public updateShopForm: FormGroup;
  public shopId: any;
  public name: string;
  public phone: number;
  public address: string;
  public pincode: number;
  public type: string;

  constructor(private fb: FormBuilder,
              private service: ShopsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.updateForm();
      this.getShopId();
      this.getShopData();
  }

  public updateForm() {
      this.updateShopForm = this.fb.group({
        name: ['', [Validators.required]],
        type: ['hotel', [Validators.required]],
        address: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        phone: ['', [Validators.required]],
      });
  }

  public getShopId() {
      this.shopId = this.route.snapshot.paramMap.get('id');
  }

  public getShopData() {
      this.service.getAShop(this.shopId)
          .subscribe((shop) => {
              this.name = shop.name;
              this.address = shop.address;
              this.pincode = shop.pincode;
              this.phone = shop.phone;
              this.type = shop.type;
          });
  }

  public updateShopInfo() {
      this.service.updateShop(this.shopId, this.updateShopForm.value)
          .subscribe((data) => {
              this.router.navigate(['/shops']);
          });
  }

}
