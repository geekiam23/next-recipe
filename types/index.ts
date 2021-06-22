import 'next';

export interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  aggregateLikes: number;
  spoonacularScore: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageUrl: string;
  imageType: string;
  nutrition: Nutrition;
  summary: string;
  cuisines: Tag[];
  dishTypes: Tag[];
  diets: Tag[];
  occasions: Tag[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: null;
  spoonacularSourceUrl: string;
  favorite?: boolean;
}

export interface Tag {
  name: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ent[];
  equipment: Ent[];
  length?: Length;
}

export interface Ent {
  id: number;
  name: string;
  localizedName: string;
  image?: string;
}

export interface Length {
  number: number;
  unit: string;
}

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: Consistency;
  name: string;
  nameClean: string;
  original: string;
  originalString: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  metaInformation: string[];
  measures: Measures;
}

export enum Consistency {
  Liquid = 'liquid',
  Solid = 'solid',
}

export interface Measures {
  us: Metric;
  metric: Metric;
}

export interface Metric {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface Nutrition {
  nutrients: Flavanoid[];
  properties: Flavanoid[];
  flavanoids: Flavanoid[];
  ingredients: Ingredient[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

export interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

export interface Flavanoid {
  name: string;
  title: string;
  amount: number;
  unit: Unit;
  percentOfDailyNeeds?: number;
}

export enum Unit {
  Empty = '',
  G = 'g',
  Iu = 'IU',
  Kcal = 'kcal',
  Mg = 'mg',
  Μg = 'µg',
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: Flavanoid[];
}

export interface WeightPerServing {
  amount: number;
  unit: Unit;
}

export interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
}

export interface ProductMatch {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}

export interface EventTarget {
  value: string;
}

export interface SyntheticEvent {
  target: EventTarget;
  keyCode: number;
  preventDefault(): void;
}

export interface FormInfo {
  email: string;
  password?: string | null;
  confirmPassword?: string | null;
}

export interface SessionInfo {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formInfo: FormInfo;
}
