import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { Project } from '../project';
import {AfterViewInit,OnDestroy, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {BasicPaginationComponent} from '../../pagination/basic-pagination/basic-pagination.component';
import { ProjectPagination } from '../../project/projectPagination'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,AfterViewInit, OnDestroy{

  projects: Project[] = [];
  projectData: ProjectPagination[];
  @ViewChild(BasicPaginationComponent, {static: true}) paginator: BasicPaginationComponent;
    private _unsubscribeAll: Subject<any>;
    isLoading = false; // show data table if it is false, here you may use a loader when it is true
    displayedColumns: string[] = ['name', 'email'];
    dataSource: MatTableDataSource<any>; // mat table data source
    // for pagination
    total: any;
    pageOffset: any;
    pageIndex: any;

  // constructor() { }
  constructor(public projectService: ProjectService) {
    this._unsubscribeAll = new Subject()
   }

  ngOnInit(): void {
    this.isLoading = true;
		this.pageOffset = 10;
		this.pageIndex = 1;
		//this.orderBy = 'desc';
    this.projectService.getAll(this.pageOffset, this.pageIndex).subscribe((data: any)=>{
      if(data){
        this.projects = data.data;
        console.log('this.projectsthis.projects',this.projects)
      }
    })
  }

  deleteProject(id){
    this.projectService.delete(id).subscribe(res => {
         this.projects = this.projects.filter(item => item.id !== id);
         console.log('Project deleted successfully!');
    })
  }



  getValues(): void {
		this.isLoading = true;
		  this.projectService.getAll(this.pageOffset, this.pageIndex)
			.pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
				this.dataSource = new MatTableDataSource(res.data);
				this.total = res.total;
				this.isLoading = false;
		});  
	}
	
	ngAfterViewInit(): void {
		// after paginate state update in pagination component
		this.paginator.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe(paginator => {
			this.pageIndex = paginator.page;
			this.pageOffset = paginator.pageOffset;
			this.getValues();
		});
	}
	
	ngOnDestroy(): void {
		// Unsubscribe
		//this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
	}

}

