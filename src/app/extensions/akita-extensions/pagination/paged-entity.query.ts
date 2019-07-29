import { EntityStore, QueryEntity } from '@datorama/akita';

import { PagedEntityState } from './paged-entity.state';

export class PagedEntityQuery<S extends PagedEntityState> extends QueryEntity<S> {
  selectPagination$ = this.select(state => state.ui.pagination);

  constructor(protected store: EntityStore<any, any, any>) {
    super(store);
  }
}