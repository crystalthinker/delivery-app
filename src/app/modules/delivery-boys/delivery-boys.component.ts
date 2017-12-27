import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';

@Component({
  selector: 'app-delivery-boys',
  templateUrl: './delivery-boys.component.html',
  styleUrls: ['./delivery-boys.component.scss']
})
export class DeliveryBoysComponent implements OnInit {
  deliveryBoys: any = [];
  constructor(private service: DeliveryBoysService) { }

  ngOnInit() {
    this.service.getAllDeliveryBoys().subscribe(deliveryBoys => {
      this.deliveryBoys = deliveryBoys;
    });
  }

}
