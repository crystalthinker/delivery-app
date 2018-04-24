import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public tableColumn = [
      {field: 'delivery_from', header: 'Delivery From'},
      {field: 'status', header: 'Status'}
  ];

  constructor(private service:DeliveryBoysService, private router:Router) { }

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

  public onRowSelect(event) {
      this.router.navigate([`/deliveryboy-dashboard/details/${this.id}`]);
  }

  // public onClick(id: any) {
  //     this.router.navigate([`/assignment-details/${id}`]);
  // }

}
