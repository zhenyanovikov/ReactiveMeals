import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthrorizedRoute from './AuthorizedRoute';

import { Fridge, SignIn, SignUp } from '~/components/pages';
import { ROUTES } from '~/constants';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path={ROUTES.SIGN_IN} />
        <Route element={<SignUp />} path={ROUTES.SIGN_UP} />
        <Route element={<AuthrorizedRoute />}>
          <Route element={<Fridge />} path={ROUTES.FRIDGE} />
          <Route element={<Fridge />} path={ROUTES.MENU} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
