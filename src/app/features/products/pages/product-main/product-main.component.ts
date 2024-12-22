import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-product-main',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ProductGridComponent,
  ],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css'
})
export class ProductMainComponent {}
