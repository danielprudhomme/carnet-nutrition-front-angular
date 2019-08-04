import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { NutritionalInfoTypeTranslatePipe } from './pipes/i18n/nutritional-info-type-translate.pipe';


const pipes = [NutritionalInfoTypeTranslatePipe];
const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
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
