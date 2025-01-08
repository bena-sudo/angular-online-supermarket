import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductImageComponent } from '../product-image/product-image.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [RouterLink, ProductImageComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  @Input({ required: true }) product?: Product | null;
}
