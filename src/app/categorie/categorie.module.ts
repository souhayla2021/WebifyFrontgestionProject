import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BasicPaginationComponent } from '../pagination/basic-pagination/basic-pagination.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent, 
  //  BasicPaginationComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategorieModule { }
