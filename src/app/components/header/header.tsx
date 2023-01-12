import { AppBar } from '@mui/material';
import { Container } from '../container/container';

export const Header = (): JSX.Element => {
  return (
    <AppBar position="static" component="header" sx={{ py: 1 }} elevation={0}>
      <Container>
        <h2>header</h2>
      </Container>
    </AppBar>
  );
};
