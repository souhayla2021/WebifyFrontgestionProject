import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Project } from './project';
import { ProjectPagination } from './projectPagination';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL = "http://localhost:8000/api/project/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(pageOffset: any, page): Observable<any> {
    const params = new HttpParams({
      fromObject: {pageOffset, page}
    });
   return this.httpClient.get<any>(`${this.apiURL}`, {params: params ? params : null})
   .pipe(
     catchError(this.errorHandler)
   )
 }


/* 
 private readonly baseUrl = "127.0.0.1:8000/api"; // here use your project's base url
 private additionalUrl = "/employees"; // here use your remaining route url
 protected _url = `${this.baseUrl}${this.additionalUrl}`;
 
 getAll(pageOffset: any, page): Observable<any> {
     const params = new HttpParams({
       fromObject: {pageOffset, page}
     });
 
return this.http.get(`${this._url}`, {params: params ? params : null});
 } */



 create(project): Observable<Project> {
   return this.httpClient.post<Project>(this.apiURL, JSON.stringify(project), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Project> {
   return this.httpClient.get<Project>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, project): Observable<Project> {
   return this.httpClient.put<Project>(this.apiURL + id, JSON.stringify(project), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Project>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}