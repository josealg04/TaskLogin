import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ModalComponent } from './modal/modal.component';
import { ModalVerComponent } from './modal-ver/modal-ver.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'tasklist',
    component: TaskListComponent
  },
  {
    path: 'taskadd',
    component: TaskAddComponent
  },
  {
    path: 'taskedit/:id',
    component: TaskEditComponent
  },
  {
    path: 'ver/:id',
    component: ModalVerComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: '',
    component: LoginFormComponent
  },
  { path: 'home', 
  canActivate:[AuthGuard],
  component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
