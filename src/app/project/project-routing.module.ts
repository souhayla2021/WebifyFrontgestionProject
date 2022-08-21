import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../project/index/index.component';
import { CreateComponent } from '../project/create/create.component';
import { EditComponent } from '../project/edit/edit.component';

const routes: Routes = [ 
{ path: 'project', redirectTo: 'project/index', pathMatch: 'full'},
{ path: 'project/index', component: IndexComponent },
{ path: 'project/create', component: CreateComponent },
{ path: 'project/edit/:idProject', component: EditComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
