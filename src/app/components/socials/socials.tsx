import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Link, List, ListItem, ListItemIcon, styled } from '@mui/material';

const SocialsWrapper = styled(Box, { label: 'socials' })(({ theme }) => ({
  '.MuiList-root': {
    display: 'flex',
    columnGap: theme.spacing(2),
  },
  '.MuiListItem-root': {
    position: 'relative',
    padding: 0,
    width: 'auto',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: -5,
      top: -5,
      right: -5,
      bottom: -5,
    },
  },
  '.MuiListItemIcon-root': {
    minWidth: 'auto',
  },
}));

export const Socials = (): JSX.Element => {
  return (
    <SocialsWrapper>
      <List>
        <ListItem
          component={Link}
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ListItemIcon>
            <FacebookIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component={Link}
          href="https://telegram.me/YourUsernameHere"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ListItemIcon>
            <TelegramIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component={Link}
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ListItemIcon>
            <InstagramIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
      </List>
    </SocialsWrapper>
  );
};
