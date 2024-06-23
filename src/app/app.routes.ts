import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  }
];
