import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface PickListItem {
  id: any;
  label: string;
}

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
  @Input() availableItems: PickListItem[];
  @Input() selectedIds: any[];
  @Input() textListLeft: string;
  @Input() textListRight: string;
  @Output() onChanged = new EventEmitter<any[]>();

  notSelected: PickListItem[];
  selected: PickListItem[];

  constructor() { }

  ngOnInit() {
    this.notSelected = this.availableItems.filter(x => !this.selectedIds.includes(x.id));
    this.selected = this.availableItems.filter(x => this.selectedIds.includes(x.id));
  }

  drop(event: CdkDragDrop<PickListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.onChanged.emit(this.selected.map(x => x.id));
  }

}
