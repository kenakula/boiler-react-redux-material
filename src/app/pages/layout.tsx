import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Toaster } from 'app/components';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Toaster />
      <Footer />
    </>
  );
};
