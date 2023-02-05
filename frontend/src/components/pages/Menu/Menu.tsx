import { Grid, Stack, Typography } from '@mui/material';

import { Meal } from '~/components/organisms';
import { MEALS } from '~/constants';
import { en } from '~/translations';

function Menu() {
  return (
    <>
      <Stack marginBottom={2}>
        <Typography variant="h5" component="span">
          {en.Menu.Texts.Meals}
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {MEALS.map((meal) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={meal.id}>
            <Meal meal={meal} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Menu;
