import { alpha, Box, styled } from '@mui/material';
import { Container } from '../container/container';

export const CustomFooter = styled(Box, { label: 'footer' })(({ theme }) => ({
  padding: theme.spacing(2, 0, 4),
  background:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.primary.light, 0.2)
      : theme.palette.background.paper,
}));

export const Footer = (): JSX.Element => {
  return (
    <CustomFooter component="footer">
      <Container>
        <h2>footer</h2>
      </Container>
    </CustomFooter>
  );
};
