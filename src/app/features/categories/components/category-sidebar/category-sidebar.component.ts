import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../core/models/category.model';
import { CategoryService } from '../../service/category.service';
import { CategoryItemListComponent } from '../category-item-list/category-item-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-sidebar',
  imports: [RouterLink, CategoryItemListComponent],
  templateUrl: './category-sidebar.component.html',
  styleUrl: './category-sidebar.component.css',
})
export class CategorySidebarComponent implements OnInit {
  categories: Category[] = [];

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    try {
      this.categories = await this.categoryService.getCategories();
    } catch (error) {
      console.error('Error when loading categories:', error);
    }
  }
}
