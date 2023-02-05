import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { ROUTES } from '~/constants';
import { en } from '~/translations';
import { IMeal } from '~/types';

interface IMealProps {
  meal: IMeal;
}

function Meal(props: IMealProps) {
  const { id, name, image, instructions } = props.meal;

  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia image={image} title={name} sx={{ height: 140 }} />
      <CardContent>
        <Typography variant="h5" component="span">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>{en.Menu.Buttons.LearnMore}</Button>
      </CardActions>
    </Card>
  );

  function handleClick() {
    navigate(`${ROUTES.MENU}/${id}`);
  }
}

export default Meal;
