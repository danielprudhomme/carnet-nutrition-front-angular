export class PaginationParameters {
  page: number;
  pageSize: number;
  sortBy: string;
  sortDirection: 'asc' | 'desc' | '';
  searchTerm: string;

  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }
}