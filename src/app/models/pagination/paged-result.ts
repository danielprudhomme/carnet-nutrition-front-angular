export interface PagedResult<T> {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  results: T[];
  rowCount: number;
}