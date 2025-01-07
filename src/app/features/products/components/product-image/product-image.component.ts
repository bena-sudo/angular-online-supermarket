import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-image',
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css',
})
export class ProductImageComponent {
  @Input({ required: true }) product?: Product | null;
}
