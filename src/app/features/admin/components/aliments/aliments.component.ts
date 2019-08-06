import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NutritionalInfoType } from 'src/app/enums';
import { PaginationParameters } from 'src/app/models/pagination/pagination-parameters';
import { UnitTranslateService } from 'src/app/services/i18n/unit-translate.service';

import { Aliment } from '../../state/aliments/aliment.model';
import { AlimentsQuery } from '../../state/aliments/aliments.query';
import { AlimentsService } from '../../state/aliments/aliments.service';
import { AlimentDisplayedColumnsDialog } from '../aliments-displayed-columns-dialog/aliments-displayed-columns.dialog';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentsComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Aliment>();
  pageSizeOptions = [10, 20, 50, 100];
  paginationParams = new PaginationParameters(0, this.pageSizeOptions[1]);
  nutritionalInfoTypes: NutritionalInfoType[];
  displayednutritionalInfoTypes: NutritionalInfoType[];
  isLoading: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private cd: ChangeDetectorRef,
    public dialog: MatDialog,
    private alimentsService: AlimentsService,
    private alimentsQuery: AlimentsQuery,
    private unitTranslate: UnitTranslateService) {
    this.fillNutritionalInfoTypes();
    this.updateDisplayedColumns();
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
    
    this.displayednutritionalInfoTypes = [1, 2, 3, 4];
  }

  updateDisplayedColumns() {
    const displayednutritionalInfoTypes: string[] = this.displayednutritionalInfoTypes.map(x => 'type-' + x);
    this.displayedColumns = ['label', ...displayednutritionalInfoTypes];
    this.cd.markForCheck();
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

  modifyDisplayedColumns() {
    const dialogRef = this.dialog.open(AlimentDisplayedColumnsDialog, {
      data: {
        all: this.nutritionalInfoTypes,
        displayed: this.displayednutritionalInfoTypes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.displayednutritionalInfoTypes = result;
        this.updateDisplayedColumns();
      }
    });
  }
}
