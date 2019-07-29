import { EntityStore } from '@datorama/akita';

import { PagedEntityState } from './paged-entity.state';
import { PagedResult } from '../../../models/pagination/paged-result';
import { PaginationInfo } from './pagination-info';

const initialState = {
  ui: { pagination: null }
}

export class PagedEntityStore<T> extends EntityStore<PagedEntityState<T>> {
  constructor() {
    super(initialState);
  }

  updatePagedResult(pagedResult: PagedResult<T>) {
    let pagination: PaginationInfo = {
      currentPage: pagedResult.currentPage,
      firstRowOnPage: pagedResult.firstRowOnPage,
      lastRowOnPage: pagedResult.lastRowOnPage,
      pageCount: pagedResult.pageCount,
      pageSize: pagedResult.pageSize,
      rowCount: pagedResult.rowCount,
    };

    this.set(pagedResult.results);
    this.update({
      ui:
      {
        pagination
      }
    });
  }
}