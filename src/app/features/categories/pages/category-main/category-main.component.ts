import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ProductGridComponent } from '../../../products/components/product-grid/product-grid.component';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';
import { ProductService } from '../../../products/service/product.service';
import { Product } from '../../../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';

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
export class CategoryMainComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    const categoryID = this.route.snapshot.paramMap.get('id');
    if (categoryID) {
      this.loadProductsByCategoryId(categoryID);
    } else {
      this.loadProducts();
    }
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error when loading products:', error);
    }
  }

  async loadProductsByCategoryId(categoryId: string): Promise<void> {
    try {
      this.products =
        await this.productService.getProductsByCategoryId(categoryId);
    } catch (error) {
      console.error('Error when loading products:', error);
    }
  }
}
