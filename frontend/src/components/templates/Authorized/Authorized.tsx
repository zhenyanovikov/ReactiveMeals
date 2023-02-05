import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Kitchen as KitchenIcon,
  RestaurantMenu as RestaurantMenuIcon,
} from '@mui/icons-material';
import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';
import { grey } from '@mui/material/colors';

interface IAutorizedProps {
  children: React.ReactNode;
}

function Authrorized(props: IAutorizedProps) {
  const { children } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pages = useMemo(
    () => [
      {
        id: 'menu',
        title: 'Menu',
        path: '/menu',
        icon: <RestaurantMenuIcon />,
      },
      {
        id: 'fridge',
        title: 'Fridge',
        path: '/fridge',
        icon: <KitchenIcon />,
      },
    ],
    []
  );

  const activePage = useMemo(
    () => pages.find((page) => page.path === pathname),
    [pathname]
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={handlePageClick(page.path)}
                  sx={{
                    color: activePage?.id === page.id ? grey[50] : grey[400],
                  }}
                  startIcon={page.icon}
                >
                  {page.title}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        {children}
      </Container>
    </>
  );

  function handlePageClick(path: string) {
    return () => {
      navigate(path);
    };
  }
}

export default Authrorized;
