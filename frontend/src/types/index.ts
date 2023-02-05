export interface IIngredient {
  id: number;
  name: string;
  value: number;
  group: string;
}

export interface IMeal {
  id: string;
  name: string;
  image: string;
  ingredients: IIngredient[];
  instructions: string;
}
