import { Injectable } from '@angular/core';
import { Unit } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class UnitTranslateService {
  private unitTranslations = new Map<Unit, string>([
    [Unit.None, ''],
    [Unit.Gram, 'g'],
    [Unit.Milligram, 'mg'],
    [Unit.Microgram, 'μg'],
    [Unit.KCal, 'kCal'],
    [Unit.KJ, 'kJ'],
  ]);

  constructor() { }

  get(unit: Unit): string {
    return this.unitTranslations.get(unit);
  }
}
