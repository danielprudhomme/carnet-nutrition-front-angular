import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AlimentsComponent } from './components/aliments/aliments.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'aliments',
        component: AlimentsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
