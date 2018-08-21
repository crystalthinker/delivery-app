import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
  deliveries: any = [];
  headerData: any = ['Delivery From',
    'Delivery Boy Assigned',
    'Status'];
  listKeys: any = ['delivery_from', 'delivery_boy_assigned', 'status'];
  deliveryId: number;
  constructor(private service: DeliveryService, private router: Router) { }

  ngOnInit() {
    this.service.getAllDelivery().subscribe(deliveries => {
      this.deliveries = deliveries;
    });
  }

  public onClick(id: any) {
      this.router.navigate([`/delivery/detail/${id}`]);
  }
}
