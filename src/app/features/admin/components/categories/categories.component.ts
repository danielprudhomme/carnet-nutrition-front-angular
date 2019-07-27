import { Component, OnInit, ViewChild } from '@angular/core';

import { CategoriesQuery } from '../../state/categories/categories.query';
import { CategoriesService } from '../../state/categories/categories.service';
import { Category } from '../../state/categories/category.model';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['label'];
  dataSource = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.categoriesQuery.selectAll().subscribe(data => {
      this.dataSource.data = data;
    });

    this.categoriesService.getAll();
  }

}
