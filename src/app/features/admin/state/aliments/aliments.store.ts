import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { PagedEntityState, PagedEntityStore } from 'src/app/extensions/akita-extensions';

import { AdminServiceModule } from '../../admin-service.module';
import { Aliment } from './aliment.model';

export interface AlimentsState extends PagedEntityState<Aliment> { }

@Injectable({
  providedIn: AdminServiceModule
})
@StoreConfig({ name: 'aliments' })
export class AlimentsStore extends PagedEntityStore<AlimentsState> {
  constructor() {
    super();
  }
}
