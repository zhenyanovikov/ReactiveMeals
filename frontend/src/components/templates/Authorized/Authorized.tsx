import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Kitchen as KitchenIcon,
  RestaurantMenu as RestaurantMenuIcon,
} from '@mui/icons-material';
import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';

interface IAutorizedProps {
  children: React.ReactNode;
}

function Authrorized(props: IAutorizedProps) {
  const { children } = props;

  const navigate = useNavigate();

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
                  sx={{ color: 'white' }}
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
