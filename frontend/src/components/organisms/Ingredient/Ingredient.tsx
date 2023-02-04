import { Delete as DeleteIcon } from '@mui/icons-material';
import { IconButton, Paper, Stack, Typography } from '@mui/material';

import { IngredientCounter } from '~/components/molecules';
import { IIngredient } from '~/types';

interface IIngredientProps {
  ingredient: IIngredient;
}

function Ingredient(props: IIngredientProps) {
  const { name, value, group } = props.ingredient;

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack flex={0.25}>
          <Typography>{name}</Typography>
        </Stack>
        <Stack flex={0.25}>
          <Typography>{group}</Typography>
        </Stack>
        <Stack flex={0.25}>
          <IngredientCounter value={value} />
        </Stack>
        <Stack flex={0.25} alignItems="flex-end">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Ingredient;
