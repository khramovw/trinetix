import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import {CategoryModel} from "../../shared/models/category.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // Заголовок на странице
  heading = 'We work with forward businesses to create new digital platforms, products and services.';

  // Список категорий
  categories: CategoryModel[] = [];


  constructor(
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this.selectedCategory(0)
  }

  // Фильтрую категории
  selectedCategory(id: number) {
    id
      ? this.categories = this.categoriesService.categoryList.filter(res => res.id === id)
      : this.categories = this.categoriesService.categoryList;
  }

}
