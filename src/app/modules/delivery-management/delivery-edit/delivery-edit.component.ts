import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ShopsService} from '../../../core/services/shops/shops.service';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';

@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.component.html',
  styleUrls: ['./delivery-edit.component.scss']
})
export class DeliveryEditComponent implements OnInit {
  public deliveryEditForm: FormGroup;
  public shops: any = [];
  public selectedShop: any;
  public deliveryId:any;
  public deliveryData: any;
  public customerName: string;
  public address: string;
  public phone: number;
  public pincode: number;
  public shopId: number;

  constructor(private fb: FormBuilder,
              private service: DeliveryService,
              private shopService: ShopsService,
              private deliveryBoyservice: DeliveryBoysService,
              private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.updateForm();
      this.shopService.getAllShops().then(shops => {
        this.shops = shops;
      });
      this.getDeliveryId();
      this.getDeliveryData();
  }

  public updateForm() {
      const self = this;
      this.deliveryEditForm = this.fb.group({
          shop_id: ['', [Validators.required]],
          delivery_to: self.fb.group({
            customer_name: ['', [Validators.required]],
            address: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            pincode: ['', [Validators.required]],
          })
      })
  }

  public onShopChange(shopId) {
    if ( shopId ) {
      // TODO fetch hotel name and other details with id
       this.shopService.getAShop(shopId).subscribe(shop => {
        this.selectedShop = shop;
       });
    }
  }

  public getDeliveryId() {
      this.deliveryId = this.route.snapshot.paramMap.get('id');
  }

  public getDeliveryData() {
      this.service.getDeliveryById(this.deliveryId)
          .subscribe((result) =>  {
              this.shopId = result.shop_id;
              this.deliveryData = result.delivery_to;
              this.customerName = this.deliveryData.customer_name;
              this.address = this.deliveryData.address;
              this.phone = this.deliveryData.phone;
              this.pincode = this.deliveryData.pincode;
          });
  }

  public updateDelivery() {
      this.updateDeliveryBoy(this.deliveryEditForm.value);
  }

  public updateDeliveryBoy(deliveryInfo: any) {
      // TODO update to flatmap/concat
       deliveryInfo.delivery_from = this.selectedShop.name;
      // TODO add logic. Temp check only available delivery boy and pincode check
      this.deliveryBoyservice.getFilteredDeliveryBoysList('available', this.selectedShop.pincode).subscribe(boys => {
         if ( boys.length > 0) {
           deliveryInfo.status = 'Awaiting Confirmation';
           deliveryInfo.delivery_boy_assigned =  boys[0].name;
           deliveryInfo.delivery_boy_id = boys[0].id;
           let boyInfoUpdate = boys[0];
           boyInfoUpdate.status = 'engaged';
           this.deliveryBoyservice.updateDeliveryBoyStatus(boys[0].id, boyInfoUpdate).subscribe(result=>{

             this.service.changeDeliveryStatus(this.deliveryId, deliveryInfo).subscribe(res => {
               this.router.navigate(['/delivery']);
             });
           });
           // change status of boy to engaged, awaiting delivery boy confirmation status of delivery
         } else {
           // status of delivery to pending
           deliveryInfo.status = 'pending';
           deliveryInfo.delivery_boy_assigned = '';
           deliveryInfo.delivery_boy_id = '';
           this.service.addNewDelivery(deliveryInfo).subscribe(res => {
             this.router.navigate(['/delivery']);
           });
         }
      });
  }

}
