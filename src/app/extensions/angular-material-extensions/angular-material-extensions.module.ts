import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PickListComponent } from './components/pick-list/pick-list.component';

const exportedComponents = [PickListComponent];

@NgModule({
  declarations: [...exportedComponents],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [...exportedComponents]
})
export class AngularMaterialExtensionsModule { }
