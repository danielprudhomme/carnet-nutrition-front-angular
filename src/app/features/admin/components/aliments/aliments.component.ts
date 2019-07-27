import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationParameters } from 'src/app/models/pagination/pagination-parameters';

import { Aliment, AlimentCategory } from '../../state/aliments/aliment.model';
import { AlimentsQuery } from '../../state/aliments/aliments.query';
import { AlimentsService } from '../../state/aliments/aliments.service';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentsComponent implements OnInit {
  displayedColumns: string[] = ['label', 'categories'];
  dataSource = new MatTableDataSource<Aliment>();
  pageSizeOptions = [10, 20, 50];
  paginationParams = new PaginationParameters(0, this.pageSizeOptions[0]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private alimentsService: AlimentsService,
    private alimentsQuery: AlimentsQuery) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.alimentsQuery.selectAll().subscribe(data => {
      this.dataSource.data = data;
    });

    // this.alimentsQuery.selectPagination$.subscribe(pagination => {
    //   if (pagination) {
    //     this.paginator.pageIndex = pagination.currentPage;
    //     this.paginator.length = pagination.rowCount;
    //     // this.paginationInfo = pagination;
    //     console.log(pagination.rowCount);
    //   }
    // });

    this.alimentsService.getPaged(this.paginationParams);
  }

  pageChanged(pageEvent: PageEvent) {
    this.paginationParams.page = pageEvent.pageIndex;
    this.paginationParams.pageSize = pageEvent.pageSize;
    this.alimentsService.getPaged(this.paginationParams);

  }

  getCategoriesAsString(categories: AlimentCategory[]): string {
    return categories.map(x => x.label).join(', ');
  }
}
