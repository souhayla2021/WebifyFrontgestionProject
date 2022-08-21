import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { IndexComponent } from '../app/project/index/index.component';
import { CreateComponent } from '../app/project/create/create.component';
import { EditComponent } from '../app/project/edit/edit.component'; */



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
/*   { path: 'project', redirectTo: 'project/index', pathMatch: 'full'},
  { path: 'project/index', component: IndexComponent },
  { path: 'project/create', component: CreateComponent },
  { path: 'project/edit/:idProject', component: EditComponent }  */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




