import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../../core/services/delivery/delivery.service';


@Component({
  selector: 'app-delivery-management',
  templateUrl: './delivery-management.component.html',
  styleUrls: ['./delivery-management.component.scss']
})
export class DeliveryManagementComponent implements OnInit {

  deliveries: any = [];
  constructor(private service: DeliveryService) { }

  ngOnInit() {
    this.service.getAllDelivery().subscribe(deliveries => {
      this.deliveries = deliveries;
    });
  }

}
