import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
  {
    path: 'integraciones',
    loadChildren: () => import('./integracion/integracion.routes').then(m => m.integracionRoutes)
  },
  { path: '404', component:Error404PageComponent },
  { path: '', redirectTo: 'integracion', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },

];
