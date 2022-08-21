import { Component, OnInit } from '@angular/core';

import { CategorieService } from '../categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  categorie: Categorie;
  form: FormGroup;

  constructor(
    public categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCategorie'];
    this.categorieService.find(this.id).subscribe((data: Categorie)=>{
      this.categorie = data;
    });

    this.form = new FormGroup({
      titre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      description: new FormControl(''),

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categorieService.update(this.id, this.form.value).subscribe(res => {
         console.log('categorie updated successfully!');
         this.router.navigateByUrl('categorie/index');
    })
  }

}