import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  createForm() {
    this.deliveryBoyForm = this.fb.group({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      status: '',
      address: '',
      pincode: ''
    });
  }
  saveNewDeliveryBoy() {
    console.log(this.deliveryBoyForm.value);
    this.service.addNewDeliveryBoy(this.deliveryBoyForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/delivery-boys/list']);
    });
  }
}
