import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from '@mui/material';

interface IIngredientCounterProps {
  value: number;
}

function IngredientCounter(props: IIngredientCounterProps) {
  const { value } = props;

  return (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <RemoveIcon />
      </IconButton>
      <OutlinedInput
        size="small"
        value={value}
        endAdornment={<InputAdornment position="end">g</InputAdornment>}
      />
      <IconButton>
        <AddIcon />
      </IconButton>
    </Stack>
  );
}

export default IngredientCounter;
