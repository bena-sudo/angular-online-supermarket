import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { ProductMainComponent } from './features/products/pages/product-main/product-main.component';
import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' },
];
