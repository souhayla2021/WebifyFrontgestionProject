import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BasicPaginationComponent } from '../pagination/basic-pagination/basic-pagination.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'
import { PaginationComponent } from './pagination/pagination.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  declarations: [
    BasicPaginationComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatTableModule,
    
  ],
  exports: [
    BasicPaginationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class BasicPaginationModule { }