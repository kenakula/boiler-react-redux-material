import { styled, Typography } from '@mui/material';
import { HOME_PAGE } from 'app/router';
import { NavLink } from 'react-router-dom';

const CustomLogo = styled(Typography, { label: 'logo' })(({ theme }) => ({
  flexShrink: 0,
  marginRight: theme.spacing(2),
  fontSize: 24,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
})) as typeof Typography;

export const Logo = (): JSX.Element => {
  return (
    <CustomLogo
      className="logo"
      variant="body1"
      noWrap
      component={NavLink}
      to={HOME_PAGE}
    >
      LOGO
    </CustomLogo>
  );
};
