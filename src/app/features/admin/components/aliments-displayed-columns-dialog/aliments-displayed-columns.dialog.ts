import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PickListItem } from 'src/app/extensions/angular-material-extensions/components/pick-list/pick-list.component';
import { NutritionalInfoTypeTranslateService } from 'src/app/services/i18n/nutritional-info-type-translate.service';
import { NutritionalInfoType } from 'src/app/enums';

export interface DialogData {
  all: NutritionalInfoType[];
  displayed: NutritionalInfoType[];
}

@Component({
  selector: 'app-aliments-displayed-columns-dialog',
  templateUrl: './aliments-displayed-columns.dialog.html',
  styleUrls: ['./aliments-displayed-columns.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentDisplayedColumnsDialog implements OnInit {
  availableColumns: PickListItem[];
  selectedIds: NutritionalInfoType[];

  constructor(public dialogRef: MatDialogRef<AlimentDisplayedColumnsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private nutritionalInfoTypeTranslateService: NutritionalInfoTypeTranslateService) { }

  ngOnInit() {
    this.availableColumns = this.data.all.map(id => ({ id, label: this.nutritionalInfoTypeTranslateService.get(id) }));
    this.selectedIds = this.data.displayed;
  }

  onSelectionChanged(selectedIds: NutritionalInfoType[]) {
    this.selectedIds = selectedIds;
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onOkClick() {
    this.dialogRef.close(this.selectedIds);
  }
}
