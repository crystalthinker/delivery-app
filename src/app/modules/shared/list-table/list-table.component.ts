import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  @Input() headerData: any;
  @Input() listData: any;
  @Input() listKeys: any;
  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public onSelect(event: Event, id:any) {
      if(id == undefined) {
         return false;
      }
      this.onRowSelect.emit(id);
  }

}
