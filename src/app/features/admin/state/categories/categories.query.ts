import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { AdminServiceModule } from '../../admin-service.module';
import { CategoriesState, CategoriesStore } from './categories.store';

@Injectable({
  providedIn: AdminServiceModule
})
export class CategoriesQuery extends QueryEntity<CategoriesState> {
  constructor(protected store: CategoriesStore) {
    super(store);
  }
}