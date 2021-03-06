import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';
import { DefaultComponent } from './components/default.component';
import { UserEditComponent } from './components/user.edit.component';
import { TaskNewComponent } from './components/task.new.component';
import { TaskDetailComponent } from './components/task.detail.component';
import { TaskEditComponent } from './components/task.edit.component';

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'index', component: DefaultComponent },
    { path: 'index/:page', component: DefaultComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:action', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-edit', component: UserEditComponent },
    { path: 'task-new', component: TaskNewComponent },
    { path: 'task-edit/:id', component: TaskEditComponent },
    { path: 'task/:id', component: TaskDetailComponent },
    { path: '**', component: LoginComponent } //el resto de las rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
