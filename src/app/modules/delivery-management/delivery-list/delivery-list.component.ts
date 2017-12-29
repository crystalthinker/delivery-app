import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../../core/services/delivery/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
  deliveries: any = [];
  constructor(private service: DeliveryService) { }

  ngOnInit() {
    this.service.getAllDelivery().subscribe(deliveries => {
      this.deliveries = deliveries;
    });
  }
}
