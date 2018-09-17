import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
  public deliveries: any = [];
  public deliveryId: number;
  public tableColumn = [
      {field: 'delivery_from', header: 'Delivery From'},
      {field: 'delivery_boy_assigned', header: 'Delivery Boy Assigned'},
      {field: 'status', header: 'Status'}
  ];

  constructor(private service: DeliveryService, private router: Router) { }

  ngOnInit() {
    this.service.getAllDelivery().then(deliveries => {
      this.deliveries = deliveries;
    });
  }

  public onRowSelect(event) {
      this.router.navigate([`/delivery/detail/${event.data.id}`]);
  }
}
