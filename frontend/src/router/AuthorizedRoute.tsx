import { Outlet } from 'react-router-dom';

import { Authorized } from '~/components/templates';

function AuthrorizedRoute() {
  return (
    <Authorized>
      <Outlet />
    </Authorized>
  );
}

export default AuthrorizedRoute;
