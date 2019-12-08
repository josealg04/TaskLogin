import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdTableComponent } from 'app/modals/md-table/md-table.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(){
    const modalRef = this.modalService.open(MdTableComponent, { centered: true });
    modalRef.componentInstance.title = 'Table Example';
  }

  ngOnInit() {
  }

}
