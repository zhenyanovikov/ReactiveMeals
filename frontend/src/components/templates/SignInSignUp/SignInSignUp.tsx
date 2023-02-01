import { Link } from 'react-router-dom';
import {
  AppRegistration as AppRegistrationIcon,
  Login as LoginIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { ROUTES } from '~/constants';
import { en } from '~/translations';

interface ISignInSignUpProps {
  pageName: 'SignIn' | 'SignUp';
}

function SignInSignUp(props: ISignInSignUpProps) {
  const { pageName } = props;

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Stack alignItems="center" spacing={2} marginTop={8}>
          <Avatar sx={{ width: 56, height: 56 }}>
            {pageName === 'SignIn' ? <LoginIcon /> : <AppRegistrationIcon />}
          </Avatar>
          <Typography variant="h5" component="span" textAlign="center">
            {en[pageName].Title}
          </Typography>
          <Card sx={{ width: '100%', padding: 2 }}>
            <Stack spacing={2}>
              <TextField label={en[pageName].TextFields.Username} />
              <TextField label={en[pageName].TextFields.Password} />
              <Button variant="contained">{en[pageName].Button}</Button>
            </Stack>
          </Card>
          <Card sx={{ width: '100%', padding: 2 }}>
            <Stack alignItems="center">
              <Typography textAlign="center">
                {en[pageName].Texts.Question}{' '}
                <Typography
                  component={Link}
                  to={pageName === 'SignIn' ? ROUTES.SIGN_UP : ROUTES.SIGN_IN}
                  color="primary"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {en[pageName].Texts.Link}
                </Typography>
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SignInSignUp;
