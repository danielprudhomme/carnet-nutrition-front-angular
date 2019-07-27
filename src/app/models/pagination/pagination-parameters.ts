export class PaginationParameters {
  page: number;
  pageSize: number;
  sortBy: string;
  searchTerm: string;

  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }
}