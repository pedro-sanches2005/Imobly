import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { DescobertaComponent } from './components/descoberta/descoberta';
import { ClienteDashboardComponent } from './pages/cliente-dashboard'; 
import { CorretorPainelComponent } from './components/corretor/corretor-painel';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente-dashboard', component: ClienteDashboardComponent },
  { path: 'painel-corretor', component: CorretorPainelComponent },
  { path: 'descoberta', component: DescobertaComponent },
  { path: '**', redirectTo: '' }
];