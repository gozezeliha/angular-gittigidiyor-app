import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  panelOpenState = false;
  constructor(private categoryService:CategoryService) { }
  categories: any;

  ngOnInit(): void {
    this.categoryService.getcategories().subscribe(
      (response) => {
        this.categories=response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
