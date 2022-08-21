import { Component, OnInit } from '@angular/core';

import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categories: Categorie[] = [];

  // constructor() { }
  constructor(public categorieService: CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data: Categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  deleteCategorie(id){
    this.categorieService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
         console.log('categorie deleted successfully!');
    })
  }

}