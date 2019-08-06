import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

import { NutritionalInfoTypeTranslatePipe } from './pipes/i18n/nutritional-info-type-translate.pipe';
import { AngularMaterialExtensionsModule } from '../extensions/angular-material-extensions/angular-material-extensions.module';

const pipes = [NutritionalInfoTypeTranslatePipe];
const materialModules = [
  AngularMaterialExtensionsModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
];

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    ...materialModules,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    ...materialModules,
    ...pipes
  ]
})
export class SharedModule { }
