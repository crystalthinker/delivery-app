import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopsService} from '../../../core/services/shops/shops.service';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.scss']
})
export class ShopCreateComponent implements OnInit {
  shopForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ShopsService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.shopForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['hotel', [Validators.required]],
      address: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }
  saveNewShop() {
    this.service.addNewShop(this.shopForm.value).subscribe(res => {
      this.router.navigate(['/shops/list']);
    });
  }
}
