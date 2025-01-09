import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  imports: [FooterComponent, ProductGridComponent, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error when loading products:', error);
    }
  }
}
