import { IIngredient } from '~/types';

export const INGREDIENTS: IIngredient[] = [
  {
    id: 1,
    name: 'Milk',
    value: 1000,
    group: 'Dairy',
  },
  {
    id: 2,
    name: 'Eggs',
    value: 1000,
    group: 'Dairy',
  },
];

export const GROUPS = ['Dairy', 'Meat', 'Vegetables', 'Fruits', 'Grains'];
