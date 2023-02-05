import { IIngredient, IMeal } from '~/types';

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

export const MEALS: IMeal[] = [
  {
    id: '1',
    name: 'Sushi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sushi1.jpg/240px-Sushi1.jpg',
    ingredients: [
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
    ],
    instructions: 'Cook it',
  },
  {
    id: '2',
    name: 'Pizza',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    ingredients: [
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
    ],
    instructions: 'Cook it',
  },
];
