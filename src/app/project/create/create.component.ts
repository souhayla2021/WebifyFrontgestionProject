import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/categorie/categorie';
import { CategorieService } from 'src/app/categorie/categorie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  categories: Categorie[]=[];

  constructor(
    public projectService: ProjectService,
    private router: Router,
    public categorieService: CategorieService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      titre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      categorie: new FormControl(''),
      /* pagination: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]) */
      created_at: new FormControl(''),
    });

    this.categorieService.getAll().subscribe((data: Categorie[])=>{
      if(data){
        this.categories = data;
      }
    })

  }

  get f(){
    return this.form.controls;
    console.log('this.form.controls',this.form.controls);
  }

  submit(){
    console.log(this.form.value);
    this.projectService.create(this.form.value).subscribe(res => {
         console.log('Project created successfully!');
         this.router.navigateByUrl('project/index');
    })
  }

}