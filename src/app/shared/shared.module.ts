import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
