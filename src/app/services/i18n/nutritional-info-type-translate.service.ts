import { Injectable } from '@angular/core';
import { NutritionalInfoType } from 'src/app/enums';

import { StringHelper } from '../helpers/string.helper';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NutritionalInfoTypeTranslateService {
  private nutritionalInfoTypeTranslations: Map<NutritionalInfoType, string>;

  constructor(private translateService: TranslateService) {
    this.nutritionalInfoTypeTranslations = Object.keys(NutritionalInfoType).reduce(
      (acc: Map<NutritionalInfoType, string>, key: string) => {
        if (!isNaN(+key)) {
          const translationKey = 'nutritional-info-type.' + StringHelper.camelToSnakeCase(NutritionalInfoType[key]);
          acc.set(+key as NutritionalInfoType, translationKey);
        }
        return acc;
      }, new Map<NutritionalInfoType, string>());
  }

  getTranslationKey(type: NutritionalInfoType): string {
    return this.nutritionalInfoTypeTranslations.get(type);
  }

  get(type: NutritionalInfoType): string {
    return this.translateService.instant(this.nutritionalInfoTypeTranslations.get(type));
  }
}
