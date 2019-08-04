import { NutritionalInfoType, Unit } from 'src/app/enums';

export type AlimentCategory = {
  id: string;
  label: string;
};

export type AlimentNutritionalValue = {
  type: NutritionalInfoType;
  parentType?: NutritionalInfoType;
  unit: Unit;
  value: number;
};

export type Aliment = {
  id: string;
  label: string;
  categories: AlimentCategory[];
  nutritionalValues: AlimentNutritionalValue[];
};

