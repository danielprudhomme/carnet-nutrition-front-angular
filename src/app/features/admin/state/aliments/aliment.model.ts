export type AlimentCategory = {
  id: string;
  label: string;
};

export type Aliment = {
  id: string;
  label: string;
  categories: AlimentCategory[];
};

