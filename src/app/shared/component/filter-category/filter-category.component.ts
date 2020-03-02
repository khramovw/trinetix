import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
  @Output() selected: EventEmitter<number> = new EventEmitter();

  // Копия списока категорий
  list: CategoryModel[] = [];
  // Табов фильтра
  filterCategory = [];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    // Копирую обьект
    this.list = JSON.parse(JSON.stringify(this.categoriesService.categoryList));
    // Подгатавливаю объект для табов
    this.filterCategory = this.list.map(res => ({id: res.id, label: res.label, selected: false}));
    this.filterCategory.unshift({id: 0, label: 'All', selected: true});
    // Устанавливаю значение таба при инициализации
    this.selectCategory(0);
  }

  // Метод переключения табов
  selectCategory(id) {
    this.filterCategory.find(category => {
      category.selected = id === category.id;
    });
    this.selected.emit(id);
  }

}
