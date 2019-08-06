import { NgModule } from '@angular/core';
import {
  AngularMaterialExtensionsModule,
} from 'src/app/extensions/angular-material-extensions/angular-material-extensions.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminServiceModule } from './admin-service.module';
import { AdminComponent } from './admin.component';
import {
  AlimentDisplayedColumnsDialog,
} from './components/aliments-displayed-columns-dialog/aliments-displayed-columns.dialog';
import { AlimentsComponent } from './components/aliments/aliments.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AlimentsComponent,
    CategoriesComponent,
    AlimentDisplayedColumnsDialog,
  ],
  entryComponents: [
    AlimentDisplayedColumnsDialog,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    AdminServiceModule,
    AngularMaterialExtensionsModule
  ]
})
export class AdminModule { }
