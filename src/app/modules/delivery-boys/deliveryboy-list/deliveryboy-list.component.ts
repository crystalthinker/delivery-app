import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliveryboy-list',
  templateUrl: './deliveryboy-list.component.html',
  styleUrls: ['./deliveryboy-list.component.scss']
})
export class DeliveryboyListComponent implements OnInit {
  public deliveryBoys: any;
  public tableColumn = [
      {field: 'name', header: 'Name'},
      {field: 'email', header: 'Email'},
      {field: 'phone', header: 'Phone'},
      {field: 'address', header: 'Address'},
      {field: 'pincode', header: 'Pincode'},
      {field: 'status', header: 'Status'}
  ];

  constructor(private service: DeliveryBoysService,
      private router: Router) { }

  ngOnInit() {
      this.service.getAllDeliveryBoys().then(deliveryBoys => {
      this.deliveryBoys = deliveryBoys;
      });
  }

  public onRowSelect(event) {
      this.router.navigate([`/delivery-boys/detail/${event.data.id}`]);
  }
}
