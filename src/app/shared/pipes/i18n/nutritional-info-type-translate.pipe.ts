import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NutritionalInfoType } from 'src/app/enums';
import { NutritionalInfoTypeTranslateService } from 'src/app/services/i18n/nutritional-info-type-translate.service';

@Pipe({
  name: 'nutritionalInfoTypeTranslate'
})
export class NutritionalInfoTypeTranslatePipe implements PipeTransform {

  constructor(
    private translateService: TranslateService,
    private nutritionalInfoTypeTranslateService: NutritionalInfoTypeTranslateService
  ) { }

  transform(value: NutritionalInfoType): string {
    const translationKey = this.nutritionalInfoTypeTranslateService.getTranslationKey(value);
    return this.translateService.instant(translationKey);
  }

}
