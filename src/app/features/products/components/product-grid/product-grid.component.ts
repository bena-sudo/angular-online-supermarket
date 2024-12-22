import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css',
})
export class ProductGridComponent {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }
}
