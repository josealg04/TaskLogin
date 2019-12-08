import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-md-table',
  templateUrl: './md-table.component.html',
  styleUrls: ['./md-table.component.css']
})
export class MdTableComponent implements OnInit {

  @Input() title;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
