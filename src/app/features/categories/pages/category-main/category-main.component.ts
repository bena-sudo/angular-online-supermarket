import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-category-main',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './category-main.component.html',
  styleUrl: './category-main.component.css'
})
export class CategoryMainComponent {

}
