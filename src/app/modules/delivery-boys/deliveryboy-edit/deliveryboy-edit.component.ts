import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-deliveryboy-edit',
  templateUrl: './deliveryboy-edit.component.html',
  styleUrls: ['./deliveryboy-edit.component.scss']
})
export class DeliveryboyEditComponent implements OnInit {
  public updateDeliveryBoyForm: FormGroup;
  public deliveryBoyId: any;
  public name: string;
  public email: string;
  public phone: number;
  public pincode: number;
  public address: string;
  public status: any;

  constructor(private fb: FormBuilder,
              private service: DeliveryBoysService,
              private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.getDeliveryBoyId();
      this.getDeliveryBoy();
      this.updateForm();
  }

  public getDeliveryBoyId() {
      this.deliveryBoyId = this.route.snapshot.paramMap.get('id');
  }

  public updateForm() {
      this.updateDeliveryBoyForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        status: ['inactive', [Validators.required]],
        address: [''],
        pincode: ['', [Validators.required]],
      });
  }

  public getDeliveryBoy() {
      this.service.getBoy(this.deliveryBoyId)
          .subscribe((result) => {
              this.name = result.name;
              this.email = result.email;
              this.phone = result.phone;
              this.address = result.address;
              this.pincode = result.pincode;
              this.status = result.status;
          });
  }

  public updateDeliveryBoy() {
      this.service.updateDeliveryBoyStatus(this.deliveryBoyId, this.updateDeliveryBoyForm.value)
          .subscribe((res) => {
              this.router.navigate(['/delivery-boys']);
          })
  }

}
