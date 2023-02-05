import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthrorizedRoute from './AuthorizedRoute';

import { Fridge, Meal, Menu, SignIn, SignUp } from '~/components/pages';
import { ROUTES } from '~/constants';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path={ROUTES.SIGN_IN} />
        <Route element={<SignUp />} path={ROUTES.SIGN_UP} />
        <Route element={<AuthrorizedRoute />}>
          <Route element={<Fridge />} path={ROUTES.FRIDGE} />
          <Route element={<Menu />} path={ROUTES.MENU} />
          <Route element={<Meal />} path={`${ROUTES.MENU}/:id`} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
