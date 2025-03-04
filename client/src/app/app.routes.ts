import { Routes } from '@angular/router';
import { ApiDownComponent } from './components/api-down/api-down.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'error',
    component: ApiDownComponent,
  },
  { path: '*', redirectTo: '/' },
];
