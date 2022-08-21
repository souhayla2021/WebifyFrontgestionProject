import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Project } from '../project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  project: Project;
  form: FormGroup;

  constructor(
    public projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProject'];
    this.projectService.find(this.id).subscribe((data: Project)=>{
      this.project = data;
    });

    this.form = new FormGroup({
      titre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      categorie: new FormControl(''),
      created_at: new FormControl(''),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.projectService.update(this.id, this.form.value).subscribe(res => {
         console.log('Project updated successfully!');
         this.router.navigateByUrl('project/index');
    })
  }

}
