import { Stack, Typography } from '@mui/material';

import { Ingredient, IngredientForm } from '~/components/organisms';
import { INGREDIENTS } from '~/constants';
import { en } from '~/translations';

function Fridge() {
  return (
    <>
      <Stack marginBottom={2}>
        <Typography variant="h5" component="span">
          {en.Fridge.Texts.AddIngredient}
        </Typography>
      </Stack>
      <Stack marginBottom={8}>
        <IngredientForm />
      </Stack>

      <Stack marginBottom={2}>
        <Typography variant="h5" component="span">
          {en.Fridge.Texts.YourIngredients}
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {INGREDIENTS.map((ingredient) => (
          <Ingredient key={ingredient.id} ingredient={ingredient} />
        ))}
      </Stack>
    </>
  );
}

export default Fridge;
