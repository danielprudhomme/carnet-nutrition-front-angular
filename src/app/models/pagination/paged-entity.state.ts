import { EntityState } from '@datorama/akita';

import { PaginationInfo } from './pagination-info';

export interface PagedEntityState<E = any, IDType = any> extends EntityState<E, IDType> {
  ui: {
    pagination: PaginationInfo;
  }
}
