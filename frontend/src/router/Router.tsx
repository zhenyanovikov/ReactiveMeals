import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SignIn, SignUp } from '~/components/pages';
import { ROUTES } from '~/constants';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path={ROUTES.SIGN_IN} />
        <Route element={<SignUp />} path={ROUTES.SIGN_UP} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
