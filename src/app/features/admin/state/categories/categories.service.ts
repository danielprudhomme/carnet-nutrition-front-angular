import { Injectable } from '@angular/core';

import { AdminServiceModule } from '../../admin-service.module';
import { CategoriesStore } from './categories.store';
import { Category } from './category.model';

@Injectable({
  providedIn: AdminServiceModule
})
export class CategoriesService {

  constructor(private categoriesStore: CategoriesStore) { }

  getAll() {
    // remplacer par l'appel à l'API
    const cats: Category[] = [
      { id: '1', label: 'Viande' },
      { id: '2', label: 'Poisson' },
      { id: '3', label: 'Fromage' },
      { id: '4', label: 'Pain' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
      { id: '5', label: 'Oeuf' },
    ];
    this.categoriesStore.set(cats);
  }
}
