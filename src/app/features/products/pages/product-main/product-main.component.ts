import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { SubHeaderComponent } from '../../../../shared/components/sub-header/sub-header.component';

@Component({
  selector: 'app-product-main',
  imports: [HeaderComponent, SubHeaderComponent, FooterComponent],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css',
})
export class ProductMainComponent {}
