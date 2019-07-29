export class PaginationInfo {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;

  constructor() {
    this.currentPage = null;
    this.firstRowOnPage = null;
    this.lastRowOnPage = null;
    this.pageCount = null;
    this.pageSize = null;
    this.rowCount = null;
  }
}