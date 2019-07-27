import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { AdminServiceModule } from '../../admin-service.module';
import { Category } from './category.model';

export interface CategoriesState extends EntityState<Category> { }

@Injectable({
  providedIn: AdminServiceModule
})
@StoreConfig({ name: 'categories' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  constructor() {
    super();
  }
}
