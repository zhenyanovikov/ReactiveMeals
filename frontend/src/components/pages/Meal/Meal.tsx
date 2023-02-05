import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import { MEALS } from '~/constants';
import { en } from '~/translations';

function Meal() {
  const { id } = useParams();

  const meal = useMemo(() => MEALS.find((m) => m.id === id), [id]);

  if (!meal) {
    return null;
  }

  return (
    <Stack spacing={8}>
      <Stack>
        <Stack marginBottom={2}>
          <Typography variant="h4" component="span">
            {meal.name}
          </Typography>
        </Stack>
        <Stack>
          <img src={meal.image} alt={meal.name} width="50%" height="auto" />
        </Stack>
      </Stack>
      <Stack>
        <Stack marginBottom={2}>
          <Typography variant="h5" component="span">
            {en.Meal.Texts.Ingredients}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {meal.ingredients.map((ingredient) => (
            <Typography key={ingredient.id} color="text.secondary">
              {`${ingredient.name}, ${ingredient.value}g`}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Stack marginBottom={2}>
          <Typography variant="h5" component="span">
            {en.Meal.Texts.Instructions}
          </Typography>
        </Stack>
        <Stack>
          <Typography color="text.secondary">{meal.instructions}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Meal;
