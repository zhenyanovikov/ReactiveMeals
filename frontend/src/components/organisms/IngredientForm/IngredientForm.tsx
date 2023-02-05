import { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

import { IngredientCounter } from '~/components/molecules';
import { GROUPS } from '~/constants';
import { en } from '~/translations';

function IngredientForm() {
  const [name] = useState('');
  const [group, setGroup] = useState('');
  const [value] = useState(0);

  const handleChangeGroup = (e: SelectChangeEvent) => {
    setGroup(e.target.value);
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack flex={0.25} alignItems="flex-start">
          <TextField
            label={en.Fridge.TextFields.Name}
            value={name}
            size="small"
          />
        </Stack>
        <Stack flex={0.25} alignItems="flex-start">
          <FormControl size="small" sx={{ minWidth: '80%' }}>
            <InputLabel id="group-select-label">
              {en.Fridge.TextFields.Group}
            </InputLabel>
            <Select
              id="group-select"
              labelId="group-select-label"
              label={en.Fridge.TextFields.Group}
              value={group}
              onChange={handleChangeGroup}
            >
              {GROUPS.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack flex={0.25}>
          <IngredientCounter value={value} />
        </Stack>
        <Stack flex={0.25} alignItems="flex-end">
          <Button variant="contained">{en.Fridge.Buttons.Add}</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default IngredientForm;
