import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getcategories();
  }

  getcategories() {
    this.categoryService.getcategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
