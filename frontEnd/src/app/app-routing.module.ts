import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Added components:
import {TaskComponent } from './task/task.component';
import {ShowComponent } from './show/show.component';
import {CreateComponent } from './create/create.component';
import {EditComponent } from './edit/edit.component';
import { DeleteComponent} from "./delete/delete.component";
// import { CancelComponent} from "./cancel/cancel.component";

const routes: Routes = [
  {path: "tasks", component: TaskComponent},
  {path: "tasks/create", component: CreateComponent},
  {path: "tasks/:id", component: ShowComponent},
  {path: "tasks/:id/edit", component: EditComponent},
  {path: "tasks/:id/delete", component: DeleteComponent},
  // {path: "tasks/", component: CancelComponent},
  {path: "", pathMatch: "full", redirectTo: "tasks"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
