import { Component, OnInit } from '@angular/core';
import {DeliveryBoysService} from '../../../core/services/delivery-boys/delivery-boys.service'

@Component({
  selector: 'app-deliveryboy-assignments',
  templateUrl: './deliveryboy-assignments.component.html',
  styleUrls: ['./deliveryboy-assignments.component.scss']
})
export class DeliveryboyAssignmentsComponent implements OnInit {
  public id: number;
  public dataSet: any;
  public tableHeader: any = [
      'Delivery From',
       'Status'
  ];
  public dataKey: any = [
      'delivery_from',
      'status'
  ];
  constructor(private service:DeliveryBoysService) { }

  ngOnInit() {
      this.getDeliveryBoyId();
      this.getAssignments();
  }

  public getAssignments() {
      this.service.getBoyAssignments(this.id)
          .subscribe((data) => {
              this.dataSet = data;
          });
  }

  public getDeliveryBoyId() {
      this.id = this.service.getId();
  }

  public onClick(id: any) {
      console.log(id);
  }

}
