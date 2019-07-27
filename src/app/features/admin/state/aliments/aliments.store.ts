import { Injectable } from '@angular/core';
import { StoreConfig } from '@datorama/akita';
import { PagedEntityState } from 'src/app/models/pagination/paged-entity.state';
import { PagedEntityStore } from 'src/app/models/pagination/paged-entity.store';

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
