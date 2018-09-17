import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliveryboy-create',
  templateUrl: './deliveryboy-create.component.html',
  styleUrls: ['./deliveryboy-create.component.scss']
})
export class DeliveryboyCreateComponent implements OnInit {
  deliveryBoyForm: FormGroup;
  constructor(private fb: FormBuilder, private service: DeliveryBoysService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  /* name: ['', [Validators.required, CustomValidators.validateCharacters]],
      email: ['', [Validators.required, Validators.email]],*/
  createForm() {
    this.deliveryBoyForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      status: ['inactive', [Validators.required]],
      address: [''],
      pincode: ['', [Validators.required]],
    });
  }
  saveNewDeliveryBoy() {
    this.service.addNewDeliveryBoy(this.deliveryBoyForm.value).subscribe(res => {
      this.router.navigate(['/delivery-boys']);
    });
  }
}
