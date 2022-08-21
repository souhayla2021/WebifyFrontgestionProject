import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectModule } from './project/project.module';
//import { LoginComponent } from './auth/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CategorieModule } from './categorie/categorie.module';
import { BasicPaginationComponent } from './pagination/basic-pagination/basic-pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent
    //BasicPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ProjectModule,
    MatToolbarModule,
    CategorieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
