import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliveryboy-list',
  templateUrl: './deliveryboy-list.component.html',
  styleUrls: ['./deliveryboy-list.component.scss']
})
export class DeliveryboyListComponent implements OnInit {
  deliveryBoys: any;
  headerData: any = ['Name',
        'Email',
        'Phone',
        'Address',
        'Pincode',
        'Status'];
  listKeys: any = ['name', 'email', 'phone', 'address', 'pincode', 'status'];
  constructor(private service: DeliveryBoysService, private router: Router) { }

  ngOnInit() {
    this.service.getAllDeliveryBoys().subscribe(deliveryBoys => {
      this.deliveryBoys = deliveryBoys;
    });
  }

  public onClick(id: any) {
      this.router.navigate([`/delivery-boys/detail/${id}`]);
  }
}
