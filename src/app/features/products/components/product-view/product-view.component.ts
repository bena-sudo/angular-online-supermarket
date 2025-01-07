import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductImageComponent } from '../product-image/product-image.component';

@Component({
  selector: 'app-product-view',
  imports: [ProductImageComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  @Input({ required: true }) product?: Product | null;
}
