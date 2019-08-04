import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NutritionalInfoType } from 'src/app/enums';
import { PaginationParameters } from 'src/app/models/pagination/pagination-parameters';

import { Aliment } from '../../state/aliments/aliment.model';
import { AlimentsQuery } from '../../state/aliments/aliments.query';
import { AlimentsService } from '../../state/aliments/aliments.service';
import { UnitTranslateService } from 'src/app/services/i18n/unit-translate.service';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentsComponent implements OnInit {
  displayedColumns: string[] = ['label', 'type-0', 'type-1', 'type-2', 'type-3', 'type-4', 'type-5', 'type-6', 'type-7', 'type-8', 'type-9', 'type-9', 'type-9', 'type-9', 'type-9', 'type-9', 'type-9', 'type-9', 'type-9'];
  dataSource = new MatTableDataSource<Aliment>();
  pageSizeOptions = [10, 20, 50, 100];
  paginationParams = new PaginationParameters(0, this.pageSizeOptions[1]);
  nutritionalInfoTypes: number[];
  isLoading: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private alimentsService: AlimentsService,
    private alimentsQuery: AlimentsQuery,
    private unitTranslate: UnitTranslateService) {
    this.fillNutritionalInfoTypes();
  }

  ngOnInit() {
    this.alimentsQuery.selectAll().subscribe(data => {
      this.dataSource.data = data;
    });

    this.alimentsQuery.selectPagination$.subscribe(pagination => {
      if (pagination) {
        this.paginator.pageIndex = pagination.currentPage;
        this.paginator.length = pagination.rowCount;
      }
    });

    this.alimentsQuery.selectLoading().subscribe(loading => {
      this.isLoading = loading;
    });

    this.alimentsService.getPaged(this.paginationParams);
  }

  fillNutritionalInfoTypes() {
    this.nutritionalInfoTypes = Object.keys(NutritionalInfoType)
      .map(key => {
        const type = NutritionalInfoType[key];
        return isNaN(type) ? null : type;
      })
      .filter(x => x != null);
  }

  pageChanged(pageEvent: PageEvent) {
    this.paginationParams.page = pageEvent.pageIndex;
    this.paginationParams.pageSize = pageEvent.pageSize;
    this.alimentsService.getPaged(this.paginationParams);
  }

  sortData(sort: Sort) {
    this.paginationParams.sortBy = sort.active;
    this.paginationParams.sortDirection = sort.direction;
    this.alimentsService.getPaged(this.paginationParams);
  }

  getCategoriesAsString(aliment: Aliment): string {
    return aliment.categories.map(x => x.label).join(', ');
  }

  getNutritionalValue(aliment: Aliment, type: NutritionalInfoType): string {
    const nutritionalValue = aliment.nutritionalValues.find(x => x.type == type);
    if (nutritionalValue == null || nutritionalValue.value == 0) {
      return '0';
    } else {
      return `${nutritionalValue.value} ${this.unitTranslate.get(nutritionalValue.unit)}`;
    }
  }
}
