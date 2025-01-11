import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { ProductMainComponent } from './features/products/pages/product-main/product-main.component';
import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail.component';
import { CategoryMainComponent } from './features/categories/pages/category-main/category-main.component';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ProductMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'categories', component: CategoryMainComponent },
  { path: 'categories/:id', component: CategoryMainComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
