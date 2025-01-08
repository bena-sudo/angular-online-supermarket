import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models/category.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-item-list',
  imports: [RouterModule],
  templateUrl: './category-item-list.component.html',
  styleUrl: './category-item-list.component.css',
})
export class CategoryItemListComponent {
  @Input({ required: true }) category!: Category;
}
