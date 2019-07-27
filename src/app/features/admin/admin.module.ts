import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminServiceModule } from './admin-service.module';
import { AdminComponent } from './admin.component';
import { AlimentsComponent } from './components/aliments/aliments.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AlimentsComponent,
    CategoriesComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    AdminServiceModule
  ]
})
export class AdminModule { }
