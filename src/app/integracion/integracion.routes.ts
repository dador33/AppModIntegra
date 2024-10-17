import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { IntegracionPageComponent } from './pages/integracion-page/integracion-page.component';

export const integracionRoutes: Routes = [
  {

    path: '',
    component:LayoutPageComponent,
    children: [
      {path: 'new-integracion', component:NewPageComponent},
      {path:'search',component:SearchPageComponent},
      {path:'edit/:id',component:NewPageComponent},
      {path:'list',component:ListPageComponent},
      {path:':id',component:IntegracionPageComponent},
      {path:'**',redirectTo:'list'},
    ]
  }
];
