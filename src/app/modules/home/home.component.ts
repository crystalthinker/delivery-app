import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../core/services/delivery-boys/delivery-boys.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: DeliveryBoysService) { }

  ngOnInit() {
    this.service.getAllDeliveryBoys().subscribe(deliveryBoys => {
      console.log('data:-', deliveryBoys);
    });
  }
}
