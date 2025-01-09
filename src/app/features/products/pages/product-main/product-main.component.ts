import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-main',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ProductGridComponent,
  ],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css',
})
export class ProductMainComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.productService.getLimitedProducts();
    } catch (error) {
      console.error('Error when loading products:', error);
    }
  }
}
