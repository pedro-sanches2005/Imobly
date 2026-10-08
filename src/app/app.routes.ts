import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { DescobertaComponent } from './components/descoberta/descoberta';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'descoberta', component: DescobertaComponent },
  { path: '**', redirectTo: '' }
];