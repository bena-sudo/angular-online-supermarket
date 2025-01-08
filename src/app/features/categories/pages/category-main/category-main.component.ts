import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ProductGridComponent } from '../../../products/components/product-grid/product-grid.component';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';

@Component({
  selector: 'app-category-main',
  imports: [
    HeaderComponent,
    FooterComponent,
    ProductGridComponent,
    CategorySidebarComponent,
  ],
  templateUrl: './category-main.component.html',
  styleUrl: './category-main.component.css',
})
export class CategoryMainComponent {}
