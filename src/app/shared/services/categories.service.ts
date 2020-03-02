import {Injectable} from '@angular/core';
import {CategoryModel} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // Список категорий
  categoryList: CategoryModel[] = [
    {
      id: 1,
      label: 'Mobile apps',
      description: `We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.`,
      imgPath: 'category-1.png'
    },
    {
      id: 2,
      label: 'Web services',
      description: `We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.`,
      imgPath: 'category-2.png'
    },
    {
      id: 3,
      label: 'Augmented reality',
      description: `We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.`,
      imgPath: 'category-3.png'
    },
    {
      id: 4,
      label: 'UX/UI Design',
      description: `We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.`,
      imgPath: 'category-4.png'
    },
    {
      id: 5,
      label: 'Development',
      description: `We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.`,
      imgPath: 'category-5.png'
    }
  ];

  constructor() {
  }
}
