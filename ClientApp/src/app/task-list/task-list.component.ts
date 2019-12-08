import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'
import { Task } from '../models/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdTableComponent } from 'app/modals/md-table/md-table.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  currentDialog = null;

  constructor(private taskservice: TaskService, private modalService: NgbModal, route: ActivatedRoute,
    router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.taskservice.getAll().subscribe(tasks => this.tasks = tasks);
  }

  open() {
    const modalRef = this.modalService.open(MdTableComponent,{ centered: true });
    modalRef.componentInstance.title = 'Editar';
  }

}
