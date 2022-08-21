import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicPaginationComponent } from './../pagination/basic-pagination/basic-pagination.component'

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    BasicPaginationComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }