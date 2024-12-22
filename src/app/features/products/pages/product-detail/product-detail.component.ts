import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get('id');
    if (productID) {
      this.getProductDetail(productID);
    }
  }

  private async getProductDetail(id: string): Promise<void> {
    try {
      this.product = await this.productService.getProductById(id);
    } catch (error) {
      console.error('Error when loading product:', error);
    }
  }
}
