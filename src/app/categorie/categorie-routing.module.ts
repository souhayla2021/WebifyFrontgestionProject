import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../categorie/index/index.component';
import { CreateComponent } from '../categorie/create/create.component';
import { EditComponent } from '../categorie/edit/edit.component';

const routes: Routes = [
  { path: 'categorie', redirectTo: 'project/index', pathMatch: 'full'},
{ path: 'categorie/index', component: IndexComponent },
{ path: 'categorie/create', component: CreateComponent },
{ path: 'categorie/edit/:idProject', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
