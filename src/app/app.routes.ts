import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, // Ruta raíz
    { path: 'login', component: LoginComponent }, // Ruta /about
    { path: '**', redirectTo: '' }, 
  ];
