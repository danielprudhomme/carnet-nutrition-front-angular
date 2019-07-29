import { Injectable } from '@angular/core';
import { PagedEntityQuery } from 'src/app/extensions/akita-extensions';

import { AdminServiceModule } from '../../admin-service.module';
import { AlimentsState, AlimentsStore } from './aliments.store';

@Injectable({
  providedIn: AdminServiceModule
})
export class AlimentsQuery extends PagedEntityQuery<AlimentsState> {
  constructor(protected store: AlimentsStore) {
    super(store);
  }
}