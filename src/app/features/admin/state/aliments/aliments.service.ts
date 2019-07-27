import { Injectable } from '@angular/core';
import { PaginationParameters } from 'src/app/models/pagination/pagination-parameters';
import { ApiService } from 'src/app/services/api.service';

import { AdminServiceModule } from '../../admin-service.module';
import { AlimentsStore } from './aliments.store';

@Injectable({
  providedIn: AdminServiceModule
})
export class AlimentsService {

  constructor(
    private apiService: ApiService,
    private alimentsStore: AlimentsStore
  ) { }

  getPaged(params: PaginationParameters) {
    this.apiService.get('aliment/paged', params).subscribe(result => {
      this.alimentsStore.updatePagedResult(result);
    });
  }
}
