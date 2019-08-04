import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NutritionalInfoType, Unit } from 'src/app/enums';
import { NutritionalInfoTypeTranslateService } from 'src/app/services/i18n/nutritional-info-type-translate.service';
import { UnitTranslateService } from 'src/app/services/i18n/unit-translate.service';

@Pipe({
  name: 'unitTranslate'
})
export class UnitTranslatePipe implements PipeTransform {

  constructor(
    private unitTranslateService: UnitTranslateService
  ) { }

  transform(value: Unit): string {
    return this.unitTranslateService.get(value);
  }

}
