import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Category } from '../../../../core/models/category.model';
import { CategoryService } from '../../service/category.service';
import { CategoryItemListComponent } from '../../components/category-item-list/category-item-list.component';

@Component({
  selector: 'app-category-main',
  imports: [RouterLink,HeaderComponent, FooterComponent, CategoryItemListComponent],
  templateUrl: './category-main.component.html',
  styleUrl: './category-main.component.css',
})
export class CategoryMainComponent implements OnInit {
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
