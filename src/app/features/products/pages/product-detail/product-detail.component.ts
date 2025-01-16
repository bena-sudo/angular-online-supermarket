import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProductViewComponent } from '../../components/product-view/product-view.component';

@Component({
  selector: 'app-product-detail',
  imports: [FooterComponent, HeaderComponent, ProductViewComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
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
