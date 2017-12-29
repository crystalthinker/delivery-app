import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  @Input() headerData: any;
  @Input() listData: any;
  @Input() listKeys: any;
  constructor() { }

  ngOnInit() {
  }

}
